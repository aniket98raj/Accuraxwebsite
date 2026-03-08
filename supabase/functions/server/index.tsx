import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js@2";
import { createHmac } from "node:crypto";

const app = new Hono();

app.use("*", logger(console.log));
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  })
);

// Env vars (set in Supabase dashboard → Edge Functions → Secrets)
// RAZORPAY_KEY_ID        - Razorpay key ID
// RAZORPAY_KEY_SECRET    - Razorpay key secret
// SUPABASE_URL           - Your Supabase project URL
// SUPABASE_SERVICE_ROLE_KEY - Service role key (not anon key!)

const RAZORPAY_KEY_ID = Deno.env.get("RAZORPAY_KEY_ID") ?? "";
const RAZORPAY_KEY_SECRET = Deno.env.get("RAZORPAY_KEY_SECRET") ?? "";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

// Plan config
const PLANS: Record<string, { price: number; name: string }> = {
  GODZILLA: { price: 399, name: "GODZILLA - High Risk Growth Model" },
  WOLF: { price: 499, name: "WOLF - Loss Recovery Model" },
  TURTLE: { price: 599, name: "TURTLE - Capital Protection Model" },
};

// Health check
app.get("/make-server-bdbd4811/health", (c) => c.json({ status: "ok" }));

// ============================================================
// POST /api/payment/create-order
// Creates a Razorpay order for a given plan
// Headers: Authorization: Bearer <supabase_jwt>
// Body: { plan_name: "GODZILLA" | "WOLF" | "TURTLE" }
// ============================================================
app.post("/api/payment/create-order", async (c) => {
  try {
    const authHeader = c.req.header("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    const token = authHeader.replace("Bearer ", "");

    // Verify JWT and get user
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    if (authError || !user) {
      return c.json({ error: "Invalid token" }, 401);
    }

    const body = await c.req.json();
    const { plan_name } = body;

    if (!PLANS[plan_name]) {
      return c.json({ error: "Invalid plan" }, 400);
    }

    const plan = PLANS[plan_name];
    const amountPaise = plan.price * 100; // Convert INR to paise

    // Create Razorpay order
    const razorpayAuth = btoa(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`);
    const orderResponse = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${razorpayAuth}`,
      },
      body: JSON.stringify({
        amount: amountPaise,
        currency: "INR",
        receipt: `accx_${user.id.slice(0, 8)}_${Date.now()}`,
        notes: {
          user_id: user.id,
          plan_name,
          user_email: user.email ?? "",
        },
      }),
    });

    if (!orderResponse.ok) {
      const errText = await orderResponse.text();
      console.error("Razorpay order error:", errText);
      return c.json({ error: "Failed to create order" }, 500);
    }

    const order = await orderResponse.json();

    // Save pending payment record
    await supabase.from("payments").insert({
      user_id: user.id,
      razorpay_order_id: order.id,
      amount: amountPaise,
      currency: "INR",
      status: "pending",
      plan_name,
    });

    return c.json({
      order_id: order.id,
      amount: amountPaise,
      currency: "INR",
      plan_name,
      key_id: RAZORPAY_KEY_ID,
    });
  } catch (err) {
    console.error("create-order error:", err);
    return c.json({ error: "Internal server error" }, 500);
  }
});

// ============================================================
// POST /api/payment/verify
// Verifies Razorpay payment signature and activates subscription
// Headers: Authorization: Bearer <supabase_jwt>
// Body: { razorpay_payment_id, razorpay_order_id, razorpay_signature, plan_name }
// ============================================================
app.post("/api/payment/verify", async (c) => {
  try {
    const authHeader = c.req.header("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    const token = authHeader.replace("Bearer ", "");

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    if (authError || !user) {
      return c.json({ error: "Invalid token" }, 401);
    }

    const body = await c.req.json();
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature, plan_name } = body;

    // Verify Razorpay signature
    const generatedSignature = createHmac("sha256", RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      // Mark payment as failed
      await supabase
        .from("payments")
        .update({ status: "failed", failure_reason: "Signature mismatch" })
        .eq("razorpay_order_id", razorpay_order_id)
        .eq("user_id", user.id);

      return c.json({ error: "Payment verification failed" }, 400);
    }

    const plan = PLANS[plan_name];
    if (!plan) return c.json({ error: "Invalid plan" }, 400);

    // Calculate subscription expiry (30 days from now)
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 30);

    // Create subscription
    const { data: subscription, error: subError } = await supabase
      .from("subscriptions")
      .insert({
        user_id: user.id,
        plan_name,
        plan_price: plan.price,
        status: "active",
        payment_id: razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature,
        started_at: new Date().toISOString(),
        expires_at: expiresAt.toISOString(),
      })
      .select()
      .single();

    if (subError) {
      console.error("Subscription insert error:", subError);
      return c.json({ error: "Failed to activate subscription" }, 500);
    }

    // Update payment record to success
    await supabase
      .from("payments")
      .update({
        status: "success",
        razorpay_payment_id,
        razorpay_signature,
        subscription_id: subscription.id,
      })
      .eq("razorpay_order_id", razorpay_order_id)
      .eq("user_id", user.id);

    return c.json({
      success: true,
      subscription_id: subscription.id,
      plan_name,
      expires_at: expiresAt.toISOString(),
    });
  } catch (err) {
    console.error("verify error:", err);
    return c.json({ error: "Internal server error" }, 500);
  }
});

// ============================================================
// GET /api/subscriptions
// Get current user's active subscriptions
// Headers: Authorization: Bearer <supabase_jwt>
// ============================================================
app.get("/api/subscriptions", async (c) => {
  try {
    const authHeader = c.req.header("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    const token = authHeader.replace("Bearer ", "");

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    if (authError || !user) {
      return c.json({ error: "Invalid token" }, 401);
    }

    const { data, error } = await supabase
      .from("subscriptions")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) return c.json({ error: error.message }, 500);
    return c.json({ subscriptions: data });
  } catch (err) {
    console.error("subscriptions error:", err);
    return c.json({ error: "Internal server error" }, 500);
  }
});

Deno.serve(app.fetch);

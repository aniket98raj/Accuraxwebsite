import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const RAZORPAY_KEY_ID = Deno.env.get("RAZORPAY_KEY_ID");
    const RAZORPAY_KEY_SECRET = Deno.env.get("RAZORPAY_KEY_SECRET");
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error("Missing environment variables");
    }

    const body = await req.json();
    const { action } = body;

    // ─── ACTION: Create Razorpay Order ───────────────────────────────────────
    if (action === "create_order") {
      const { amount, currency = "INR", planName, userId } = body;

      // Create order via Razorpay API
      const credentials = btoa(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`);
      const razorpayRes = await fetch("https://api.razorpay.com/v1/orders", {
        method: "POST",
        headers: {
          "Authorization": `Basic ${credentials}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amount * 100, // Convert to paise
          currency,
          receipt: `receipt_${Date.now()}`,
          notes: {
            planName,
            userId,
          },
        }),
      });

      if (!razorpayRes.ok) {
        const err = await razorpayRes.json();
        throw new Error(`Razorpay order creation failed: ${JSON.stringify(err)}`);
      }

      const order = await razorpayRes.json();

      // Save pending payment in Supabase
      const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
      await supabase.from("payments").insert({
        user_id: userId,
        plan_name: planName,
        amount,
        currency,
        razorpay_order_id: order.id,
        status: "pending",
      });

      return new Response(
        JSON.stringify({
          orderId: order.id,
          amount: order.amount,
          currency: order.currency,
          keyId: RAZORPAY_KEY_ID,
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // ─── ACTION: Verify Payment ───────────────────────────────────────────────
    if (action === "verify_payment") {
      const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        userId,
        planName,
        amount,
      } = body;

      // Verify signature using HMAC SHA256
      const encoder = new TextEncoder();
      const key = await crypto.subtle.importKey(
        "raw",
        encoder.encode(RAZORPAY_KEY_SECRET),
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["sign"]
      );

      const message = `${razorpay_order_id}|${razorpay_payment_id}`;
      const signatureBuffer = await crypto.subtle.sign(
        "HMAC",
        key,
        encoder.encode(message)
      );

      const generatedSignature = Array.from(new Uint8Array(signatureBuffer))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");

      if (generatedSignature !== razorpay_signature) {
        return new Response(
          JSON.stringify({ success: false, error: "Invalid payment signature" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      // Payment verified — update DB
      const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

      // Update payment record
      await supabase
        .from("payments")
        .update({
          razorpay_payment_id,
          razorpay_signature,
          status: "success",
        })
        .eq("razorpay_order_id", razorpay_order_id);

      // Calculate subscription dates
      const startDate = new Date();
      const endDate = new Date();
      endDate.setMonth(endDate.getMonth() + 1);

      // Upsert subscription
      await supabase.from("subscriptions").upsert({
        user_id: userId,
        plan_name: planName,
        amount,
        status: "active",
        start_date: startDate.toISOString(),
        end_date: endDate.toISOString(),
        razorpay_payment_id,
        razorpay_order_id,
      });

      return new Response(
        JSON.stringify({ success: true, message: "Payment verified and subscription activated" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Unknown action
    return new Response(
      JSON.stringify({ error: "Unknown action" }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

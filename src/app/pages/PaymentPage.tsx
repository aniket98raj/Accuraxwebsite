import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  ShieldCheck,
  CreditCard,
  AlertCircle,
  CheckCircle,
  ArrowLeft,
  Lock,
  Loader2,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { loadRazorpayScript } from "../../lib/razorpay";
import type { RazorpayResponse } from "../../lib/razorpay";
import { paymentApi } from "../../lib/api";

const PLAN_INFO: Record<
  string,
  {
    name: string;
    subtitle: string;
    emoji: string;
    price: number;
    color: string;
    dashboardPath: string;
  }
> = {
  GODZILLA: {
    name: "GODZILLA",
    subtitle: "High Risk Growth Model",
    emoji: "🦖",
    price: 399,
    color: "from-orange-500 to-red-600",
    dashboardPath: "/dashboard/godzilla",
  },
  WOLF: {
    name: "WOLF",
    subtitle: "Loss Recovery Model",
    emoji: "🐺",
    price: 499,
    color: "from-blue-500 to-purple-600",
    dashboardPath: "/dashboard/wolf",
  },
  TURTLE: {
    name: "TURTLE",
    subtitle: "Capital Protection Model",
    emoji: "🐢",
    price: 599,
    color: "from-green-500 to-teal-600",
    dashboardPath: "/dashboard/turtle",
  },
};

type PaymentState = "idle" | "loading" | "success" | "failed";

export function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, profile } = useAuth();

  const planName = (location.state as { planName?: string })?.planName;
  const plan = planName ? PLAN_INFO[planName] : null;

  const [paymentState, setPaymentState] = useState<PaymentState>("idle");
  const [error, setError] = useState<string | null>(null);

  const gstAmount = plan ? Math.round(plan.price * 0.18) : 0;
  const totalAmount = plan ? plan.price + gstAmount : 0;

  useEffect(() => {
    if (!plan) navigate("/pricing");
    if (!user) navigate("/login", { state: { from: location } });
  }, [plan, user]);

  if (!plan || !user) return null;

  const handlePayment = async () => {
    setError(null);
    setPaymentState("loading");

    // Load Razorpay checkout.js
    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      setError("Failed to load payment gateway. Please check your connection.");
      setPaymentState("failed");
      return;
    }

    try {
      // ── Step 1: Create Razorpay order via our Node API ──────────────────────
      const { orderId, amount, currency, keyId } = await paymentApi.createOrder(
        totalAmount,
        "INR",
        planName!
      );

      // ── Step 2: Open Razorpay payment modal ─────────────────────────────────
      const razorpay = new window.Razorpay({
        key: keyId,
        amount,
        currency,
        name: "AccuraX",
        description: `${plan.name} — ${plan.subtitle}`,
        order_id: orderId,
        prefill: {
          name: profile?.full_name ?? user.email ?? "",
          email: user.email ?? "",
          contact: profile?.phone ?? "",
        },
        theme: { color: "#3B82F6" },
        modal: {
          ondismiss: () => {
            setPaymentState("idle");
          },
        },
        handler: async (response: RazorpayResponse) => {
          // ── Step 3: Verify payment signature via our Node API ────────────────
          try {
            const result = await paymentApi.verify({
              razorpay_order_id:   response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature:  response.razorpay_signature,
              planName:            planName!,
              amount:              totalAmount,
            });

            if (!result.success) {
              throw new Error("Payment verification failed");
            }

            setPaymentState("success");
          } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : "Verification failed";
            setError(msg);
            setPaymentState("failed");
          }
        },
      });

      razorpay.open();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Payment failed";
      setError(msg);
      setPaymentState("failed");
    }
  };

  // ── Success Screen ────────────────────────────────────────────────────────────
  if (paymentState === "success") {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-gray-900 border border-green-500/30 rounded-2xl p-10 shadow-2xl">
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
            <div className="text-5xl mb-4">{plan.emoji}</div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Payment Successful!
            </h2>
            <p className="text-gray-400 mb-6">
              Your{" "}
              <span className="text-white font-semibold">{plan.name}</span>{" "}
              subscription is now active.
            </p>
            <div className="space-y-3">
              <Button
                onClick={() => navigate(plan.dashboardPath)}
                className={`w-full h-12 bg-gradient-to-r ${plan.color} text-white font-medium rounded-lg`}
              >
                Go to Dashboard
              </Button>
              <Button
                onClick={() => navigate("/user-dashboard")}
                className="w-full h-12 bg-transparent border border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white transition-all"
              >
                My Subscriptions
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Main Payment Screen ───────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-black pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        {/* Back */}
        <button
          onClick={() => navigate("/pricing")}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Plans
        </button>

        <div className="space-y-6">
          {/* Plan Summary Card */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-white font-bold mb-4 text-lg">Order Summary</h2>
            <div className={`bg-gradient-to-r ${plan.color} p-0.5 rounded-xl mb-4`}>
              <div className="bg-gray-900 rounded-xl p-4 flex items-center gap-4">
                <div className="text-4xl">{plan.emoji}</div>
                <div>
                  <p className="text-white font-bold">{plan.name}</p>
                  <p className="text-gray-400 text-sm">{plan.subtitle}</p>
                  <p className="text-gray-500 text-xs mt-1">Valid for 30 days</p>
                </div>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="space-y-3 pt-4 border-t border-gray-800">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Subscription Fee</span>
                <span className="text-white">₹{plan.price}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">GST (18%)</span>
                <span className="text-white">₹{gstAmount}</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-gray-800">
                <span className="text-white font-bold">Total</span>
                <span className="text-white font-bold text-lg">
                  ₹{totalAmount}
                </span>
              </div>
            </div>
          </div>

          {/* User Info */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-white font-bold mb-4 text-lg">Account</h2>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">
                  {profile?.full_name?.[0]?.toUpperCase() ||
                    user.email?.[0]?.toUpperCase() ||
                    "U"}
                </span>
              </div>
              <div>
                <p className="text-white text-sm font-medium">
                  {profile?.full_name || "User"}
                </p>
                <p className="text-gray-400 text-sm">{user.email}</p>
              </div>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="flex items-start gap-3 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-red-400 text-sm font-medium">
                  Payment Failed
                </p>
                <p className="text-red-400/70 text-xs mt-1">{error}</p>
              </div>
            </div>
          )}

          {/* Payment Button */}
          <Button
            onClick={handlePayment}
            disabled={paymentState === "loading"}
            className={`w-full h-14 bg-gradient-to-r ${plan.color} text-white font-bold text-base rounded-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-lg`}
          >
            {paymentState === "loading" ? (
              <div className="flex items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                Opening Payment Gateway...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Pay ₹{totalAmount} via Razorpay
              </div>
            )}
          </Button>

          {/* Trust Signals */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-500 text-xs">
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-green-400" />
              <span>256-bit SSL Encryption</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
              <span>Secured by Razorpay</span>
            </div>
          </div>

          <p className="text-center text-gray-600 text-xs leading-relaxed">
            By completing your purchase, you agree to AccuraX's Terms of
            Service. Subscriptions are non-refundable. This is an educational
            platform — not financial advice.
          </p>
        </div>
      </div>
    </div>
  );
}

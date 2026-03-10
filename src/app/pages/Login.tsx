import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Mail, Lock, Eye, EyeOff, AlertCircle, CheckCircle, RefreshCw } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { LogoIcon } from "../components/Logo";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailNotConfirmed, setEmailNotConfirmed] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const { signIn, resendConfirmationEmail } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const from =
    (location.state as { from?: { pathname: string } })?.from?.pathname ||
    "/user-dashboard";

  // Handle query params from backend redirects
  useEffect(() => {
    const errorParam = searchParams.get("error");
    const confirmed = searchParams.get("confirmed");

    if (confirmed === "true") {
      setSuccessMessage("Email confirmed successfully! You can now sign in.");
    } else if (errorParam === "expired-token") {
      setError("Your confirmation link has expired (links are valid for 24 hours). Enter your email below and resend a new one.");
      setEmailNotConfirmed(true);
    } else if (errorParam === "invalid-token") {
      setError("Invalid confirmation link. Please request a new one.");
      setEmailNotConfirmed(true);
    } else if (errorParam === "server-error") {
      setError("A server error occurred. Please try again or contact support.");
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setEmailNotConfirmed(false);
    setResendSuccess(false);
    setLoading(true);

    const { error } = await signIn(email, password);
    setLoading(false);

    if (error) {
      if (
        error.toLowerCase().includes("email not confirmed") ||
        error.toLowerCase().includes("not confirmed")
      ) {
        setEmailNotConfirmed(true);
      } else {
        setError(error);
      }
      return;
    }

    navigate(from, { replace: true });
  };

  const handleResendEmail = async () => {
    setResendLoading(true);
    setResendSuccess(false);
    const { error } = await resendConfirmationEmail(email);
    setResendLoading(false);
    if (!error) {
      setResendSuccess(true);
    } else {
      setError(`Failed to resend: ${error}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-md w-full">
        <div className="bg-black p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-800">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center justify-center mb-8 hover:scale-105 transition-transform"
          >
            <div className="flex items-center gap-3">
              <LogoIcon className="w-10 h-10" />
              <span className="text-2xl font-bold text-white">AccuraX</span>
            </div>
          </Link>

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-gray-400">Sign in to your AccuraX account</p>
          </div>

          {/* Success Banner (email confirmed) */}
          {successMessage && (
            <div className="mb-6 flex items-start gap-3 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-green-400 text-sm">{successMessage}</p>
            </div>
          )}

          {/* Email Not Confirmed / Expired Token Banner */}
          {emailNotConfirmed && (
            <div className="mb-6 p-4 bg-yellow-900/20 border border-yellow-500/40 rounded-lg">
              <div className="flex items-start gap-3 mb-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-yellow-400 text-sm font-medium">
                    Email not confirmed
                  </p>
                  <p className="text-yellow-400/70 text-xs mt-1">
                    Please check your inbox for a confirmation link. Check spam
                    folder too.
                  </p>
                </div>
              </div>

              {resendSuccess ? (
                <div className="flex items-center gap-2 text-green-400 text-xs mt-2 p-2 bg-green-900/20 rounded-lg border border-green-500/30">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  Confirmation email resent! Check your inbox.
                </div>
              ) : (
                <button
                  onClick={handleResendEmail}
                  disabled={resendLoading || !email}
                  className="w-full flex items-center justify-center gap-2 mt-1 py-2 px-4 bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/30 rounded-lg text-yellow-400 text-xs font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {resendLoading ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="w-3.5 h-3.5" />
                      Resend Confirmation Email
                    </>
                  )}
                </button>
              )}
            </div>
          )}

          {/* Generic Error */}
          {error && (
            <div className="mb-6 flex items-start gap-3 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailNotConfirmed(false);
                    setResendSuccess(false);
                  }}
                  placeholder="you@example.com"
                  className="block w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="block w-full pl-12 pr-12 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-200"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex items-center justify-end">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing in...
                </div>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-black text-gray-500">
                Don't have an account?
              </span>
            </div>
          </div>

          {/* Signup Link */}
          <Link to="/signup">
            <Button
              type="button"
              className="w-full h-12 bg-transparent border border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white transition-all"
            >
              Create Account
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
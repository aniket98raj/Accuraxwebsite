import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import { LogoIcon } from "../components/Logo";

export function ConfirmEmail() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) {
      setStatus("error");
      setMessage("Invalid confirmation link.");
      return;
    }

    const API_BASE = (import.meta.env.VITE_API_URL as string) || "";
    fetch(`${API_BASE}/api/auth/confirm-email?token=${token}`, {
      redirect: "follow",
    })
      .then((res) => {
        // Backend redirects to /login?confirmed=true or /login?error=...
        const url = new URL(res.url);
        const confirmed = url.searchParams.get("confirmed");
        const error = url.searchParams.get("error");

        if (confirmed === "true") {
          setStatus("success");
          setMessage("Email confirmed successfully!");
          setTimeout(() => navigate("/login?confirmed=true"), 2500);
        } else if (error === "expired-token") {
          setStatus("error");
          setMessage("Your confirmation link has expired. Please request a new one.");
          setTimeout(() => navigate("/login?error=expired-token"), 2500);
        } else {
          setStatus("error");
          setMessage("Invalid or already used confirmation link.");
          setTimeout(() => navigate("/login?error=invalid-token"), 2500);
        }
      })
      .catch(() => {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
        setTimeout(() => navigate("/login?error=server-error"), 2500);
      });
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <div className="mb-8">
        <LogoIcon className="h-10 w-auto" />
      </div>
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 max-w-md w-full text-center">
        {status === "loading" && (
          <>
            <Loader2 className="h-12 w-12 text-blue-500 animate-spin mx-auto mb-4" />
            <h2 className="text-white text-xl font-semibold">Confirming your email...</h2>
            <p className="text-gray-400 mt-2 text-sm">Please wait a moment.</p>
          </>
        )}
        {status === "success" && (
          <>
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h2 className="text-white text-xl font-semibold">Email Confirmed!</h2>
            <p className="text-gray-400 mt-2 text-sm">{message}</p>
            <p className="text-gray-500 mt-1 text-xs">Redirecting to login...</p>
          </>
        )}
        {status === "error" && (
          <>
            <XCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-white text-xl font-semibold">Confirmation Failed</h2>
            <p className="text-gray-400 mt-2 text-sm">{message}</p>
            <p className="text-gray-500 mt-1 text-xs">Redirecting to login...</p>
          </>
        )}
      </div>
    </div>
  );
}

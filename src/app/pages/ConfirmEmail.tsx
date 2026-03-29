import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { LogoIcon } from "../components/Logo";

export function ConfirmEmail() {
  const [searchParams] = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) {
      setError("Invalid confirmation link.");
      return;
    }

    const API_BASE = (import.meta.env.VITE_API_URL as string) || "";
    // Redirect the browser directly to the backend — it will confirm the token
    // and redirect back to /login?confirmed=true (or error)
    window.location.href = `${API_BASE}/api/auth/confirm-email?token=${token}`;
  }, []);

  if (error) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
        <div className="mb-8">
          <LogoIcon className="h-10 w-auto" />
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 max-w-md w-full text-center">
          <p className="text-red-400">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <div className="mb-8">
        <LogoIcon className="h-10 w-auto" />
      </div>
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 max-w-md w-full text-center">
        <Loader2 className="h-12 w-12 text-blue-500 animate-spin mx-auto mb-4" />
        <h2 className="text-white text-xl font-semibold">Confirming your email...</h2>
        <p className="text-gray-400 mt-2 text-sm">Please wait a moment.</p>
      </div>
    </div>
  );
}

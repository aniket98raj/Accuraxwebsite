import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { authApi, userApi, tokenStorage } from '../../lib/api';
import type { Profile } from '../../lib/api';

// ── Types ──────────────────────────────────────────────────────────────────────
export interface AuthUser {
  id: string;
  email: string;
  created_at: string;
  last_sign_in_at?: string | null;
}

export interface AuthSession {
  access_token: string;
}

interface AuthContextType {
  user: AuthUser | null;
  session: AuthSession | null;
  profile: Profile | null;
  loading: boolean;
  signUp: (
    email: string,
    password: string,
    fullName: string,
    phone: string
  ) => Promise<{ error: string | null }>;
  signIn: (
    email: string,
    password: string
  ) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: string | null }>;
  updateProfile: (
    updates: Partial<Pick<Profile, 'full_name' | 'phone'>>
  ) => Promise<{ error: string | null }>;
  refreshProfile: () => Promise<void>;
  resendConfirmationEmail: (email: string) => Promise<{ error: string | null }>;
}

// ── Context ────────────────────────────────────────────────────────────────────
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ── Provider ───────────────────────────────────────────────────────────────────
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser]       = useState<AuthUser | null>(null);
  const [session, setSession] = useState<AuthSession | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  // ── On mount: restore session from localStorage ──────────────────────────────
  useEffect(() => {
    const token = tokenStorage.get();
    if (!token) {
      setLoading(false);
      return;
    }
    // Verify token with the backend and load user + profile
    authApi.me()
      .then(({ user: u, profile: p }) => {
        setUser(u);
        setSession({ access_token: token });
        setProfile(p);
      })
      .catch(() => {
        // Token invalid/expired — clear it
        tokenStorage.clear();
      })
      .finally(() => setLoading(false));
  }, []);

  // ── signUp ───────────────────────────────────────────────────────────────────
  const signUp = async (
    email: string,
    password: string,
    fullName: string,
    phone: string
  ): Promise<{ error: string | null }> => {
    try {
      await authApi.register(email, password, fullName, phone);
      return { error: null };
    } catch (err) {
      return { error: err instanceof Error ? err.message : 'Registration failed' };
    }
  };

  // ── signIn ───────────────────────────────────────────────────────────────────
  const signIn = async (
    email: string,
    password: string
  ): Promise<{ error: string | null }> => {
    try {
      const data = await authApi.login(email, password);
      tokenStorage.set(data.token);
      setUser(data.user);
      setSession({ access_token: data.token });
      setProfile(data.profile);
      return { error: null };
    } catch (err) {
      return { error: err instanceof Error ? err.message : 'Login failed' };
    }
  };

  // ── signOut ──────────────────────────────────────────────────────────────────
  const signOut = async (): Promise<void> => {
    tokenStorage.clear();
    setUser(null);
    setSession(null);
    setProfile(null);
  };

  // ── resetPassword ────────────────────────────────────────────────────────────
  const resetPassword = async (
    email: string
  ): Promise<{ error: string | null }> => {
    try {
      await authApi.forgotPassword(email);
      return { error: null };
    } catch (err) {
      return { error: err instanceof Error ? err.message : 'Failed to send reset email' };
    }
  };

  // ── updateProfile ────────────────────────────────────────────────────────────
  const updateProfile = async (
    updates: Partial<Pick<Profile, 'full_name' | 'phone'>>
  ): Promise<{ error: string | null }> => {
    try {
      const updated = await userApi.updateProfile(updates);
      setProfile(updated);
      return { error: null };
    } catch (err) {
      return { error: err instanceof Error ? err.message : 'Failed to update profile' };
    }
  };

  // ── refreshProfile ───────────────────────────────────────────────────────────
  const refreshProfile = async (): Promise<void> => {
    try {
      const p = await userApi.getProfile();
      setProfile(p);
    } catch {
      // silently fail
    }
  };

  // ── resendConfirmationEmail ───────────────────────────────────────────────────
  const resendConfirmationEmail = async (
    email: string
  ): Promise<{ error: string | null }> => {
    try {
      await authApi.resendConfirmation(email);
      return { error: null };
    } catch (err) {
      return { error: err instanceof Error ? err.message : 'Failed to resend email' };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        profile,
        loading,
        signUp,
        signIn,
        signOut,
        resetPassword,
        updateProfile,
        refreshProfile,
        resendConfirmationEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// ── Hook ───────────────────────────────────────────────────────────────────────
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    // Safe no-op defaults for Figma preview (renders components in isolation)
    return {
      user: null,
      session: null,
      profile: null,
      loading: false,
      signUp: async () => ({ error: null }),
      signIn: async () => ({ error: null }),
      signOut: async () => {},
      resetPassword: async () => ({ error: null }),
      updateProfile: async () => ({ error: null }),
      refreshProfile: async () => {},
      resendConfirmationEmail: async () => ({ error: null }),
    };
  }
  return context;
}

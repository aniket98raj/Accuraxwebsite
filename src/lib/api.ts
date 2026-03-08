// ── AccuraX API Client ─────────────────────────────────────────────────────────
// All calls go to /api/* on the same origin (Express serves both)
// In development, set VITE_API_URL=http://localhost:3000 in .env

const API_BASE = (import.meta.env.VITE_API_URL as string) || '';

const TOKEN_KEY = 'accurax_token';

export const tokenStorage = {
  get: (): string | null => localStorage.getItem(TOKEN_KEY),
  set: (token: string)   => localStorage.setItem(TOKEN_KEY, token),
  clear: ()              => localStorage.removeItem(TOKEN_KEY),
};

// ── Core fetch wrapper ─────────────────────────────────────────────────────────
async function apiFetch<T = unknown>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const token = tokenStorage.get();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_BASE}${path}`, { ...options, headers });

  // Guard: if the response is HTML (e.g. server returned index.html), give a clear error
  const contentType = res.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    throw new Error(
      `Server returned HTML instead of JSON. ` +
      `The backend may be down or misconfigured. (${res.status} ${res.statusText})`
    );
  }

  const data = await res.json();

  if (!res.ok) {
    throw new Error((data as { error?: string }).error || 'Request failed');
  }
  return data as T;
}

// ── Auth ───────────────────────────────────────────────────────────────────────
export interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    created_at: string;
    last_sign_in_at?: string | null;
  };
  profile: {
    id: string;
    full_name: string | null;
    phone: string | null;
    avatar_url: string | null;
    created_at: string;
    updated_at: string;
  };
}

export interface MeResponse {
  user: AuthResponse['user'];
  profile: AuthResponse['profile'];
}

export const authApi = {
  register: (email: string, password: string, full_name: string, phone: string) =>
    apiFetch<{ message: string }>('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, full_name, phone }),
    }),

  login: (email: string, password: string) =>
    apiFetch<AuthResponse>('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),

  me: () => apiFetch<MeResponse>('/api/auth/me'),

  forgotPassword: (email: string) =>
    apiFetch<{ message: string }>('/api/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
    }),

  resetPassword: (token: string, password: string) =>
    apiFetch<{ message: string }>('/api/auth/reset-password', {
      method: 'POST',
      body: JSON.stringify({ token, password }),
    }),

  resendConfirmation: (email: string) =>
    apiFetch<{ message: string }>('/api/auth/resend-confirmation', {
      method: 'POST',
      body: JSON.stringify({ email }),
    }),
};

// ── User / Profile ─────────────────────────────────────────────────────────────
export interface Profile {
  id: string;
  full_name: string | null;
  phone: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export const userApi = {
  getProfile: () => apiFetch<Profile>('/api/user/profile'),

  updateProfile: (updates: Partial<Pick<Profile, 'full_name' | 'phone'>>) =>
    apiFetch<Profile>('/api/user/profile', {
      method: 'PUT',
      body: JSON.stringify(updates),
    }),

  getSubscriptions: () => apiFetch<Subscription[]>('/api/user/subscriptions'),
};

// ── Payment ────────────────────────────────────────────────────────────────────
export interface CreateOrderResponse {
  orderId: string;
  amount: number;
  currency: string;
  keyId: string;
}

export const paymentApi = {
  createOrder: (amount: number, currency: string, planName: string) =>
    apiFetch<CreateOrderResponse>('/api/payment/create-order', {
      method: 'POST',
      body: JSON.stringify({ amount, currency, planName }),
    }),

  verify: (data: {
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
    planName: string;
    amount: number;
  }) =>
    apiFetch<{ success: boolean; subscriptionId: string }>('/api/payment/verify', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};

// ── Subscription type ──────────────────────────────────────────────────────────
export interface Subscription {
  id: string;
  user_id: string;
  plan_name: 'GODZILLA' | 'WOLF' | 'TURTLE';
  plan_price: number;
  status: 'active' | 'expired' | 'cancelled';
  payment_id: string | null;
  razorpay_order_id: string | null;
  started_at: string;
  expires_at: string | null;
  created_at: string;
}
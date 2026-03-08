export type PlanName = "GODZILLA" | "WOLF" | "TURTLE";
export type SubscriptionStatus = "active" | "expired" | "cancelled";
export type PaymentStatus = "pending" | "success" | "failed";

export interface Profile {
  id: string;
  full_name: string | null;
  phone: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface Subscription {
  id: string;
  user_id: string;
  plan_name: PlanName;
  plan_price: number;
  status: SubscriptionStatus;
  payment_id: string | null;
  razorpay_order_id: string | null;
  started_at: string;
  expires_at: string | null;
  created_at: string;
}

export interface Payment {
  id: string;
  user_id: string;
  subscription_id: string | null;
  razorpay_payment_id: string | null;
  razorpay_order_id: string | null;
  razorpay_signature: string | null;
  amount: number;
  currency: string;
  status: PaymentStatus;
  plan_name: PlanName;
  created_at: string;
}

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: Profile;
        Insert: Omit<Profile, "created_at" | "updated_at">;
        Update: Partial<Omit<Profile, "id">>;
      };
      subscriptions: {
        Row: Subscription;
        Insert: Omit<Subscription, "id" | "created_at">;
        Update: Partial<Omit<Subscription, "id" | "user_id">>;
      };
      payments: {
        Row: Payment;
        Insert: Omit<Payment, "id" | "created_at">;
        Update: Partial<Omit<Payment, "id" | "user_id">>;
      };
    };
  };
}

import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

// For self-hosted Supabase: set these in your .env file
// VITE_SUPABASE_URL=https://your-supabase-instance.com
// VITE_SUPABASE_ANON_KEY=your-anon-key
const supabaseUrl =
  (import.meta.env.VITE_SUPABASE_URL as string) ||
  "https://placeholder.supabase.co";

const supabaseAnonKey =
  (import.meta.env.VITE_SUPABASE_ANON_KEY as string) ||
  "placeholder-anon-key";

export const isSupabaseConfigured =
  !!import.meta.env.VITE_SUPABASE_URL &&
  !!import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});
-- ============================================================
-- AccuraX Platform - Complete Database Schema
-- Run this in your Supabase SQL Editor (self-hosted or cloud)
-- ============================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ============================================================
-- PROFILES TABLE
-- ============================================================
create table if not exists public.profiles (
  id            uuid references auth.users on delete cascade primary key,
  full_name     text,
  phone         text,
  avatar_url    text,
  created_at    timestamptz default now() not null,
  updated_at    timestamptz default now() not null
);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, phone)
  values (
    new.id,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'phone'
  )
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Auto-update updated_at
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists profiles_updated_at on public.profiles;
create trigger profiles_updated_at
  before update on public.profiles
  for each row execute procedure public.handle_updated_at();

-- RLS for profiles
alter table public.profiles enable row level security;

create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

-- ============================================================
-- SUBSCRIPTIONS TABLE
-- ============================================================
create table if not exists public.subscriptions (
  id                  uuid default gen_random_uuid() primary key,
  user_id             uuid references auth.users on delete cascade not null,
  plan_name           text not null check (plan_name in ('GODZILLA', 'WOLF', 'TURTLE')),
  plan_price          integer not null,           -- in INR
  status              text not null default 'active'
                        check (status in ('active', 'expired', 'cancelled')),
  payment_id          text,                        -- Razorpay payment ID
  razorpay_order_id   text,                        -- Razorpay order ID
  razorpay_signature  text,                        -- Razorpay signature (verified)
  started_at          timestamptz default now() not null,
  expires_at          timestamptz,                 -- NULL = lifetime/manual expiry
  created_at          timestamptz default now() not null
);

create index if not exists idx_subscriptions_user_id on public.subscriptions(user_id);
create index if not exists idx_subscriptions_status   on public.subscriptions(status);

-- RLS for subscriptions
alter table public.subscriptions enable row level security;

create policy "Users can view own subscriptions"
  on public.subscriptions for select
  using (auth.uid() = user_id);

-- Only backend (service role) can insert/update subscriptions
create policy "Service role can manage subscriptions"
  on public.subscriptions for all
  using (auth.role() = 'service_role');

-- ============================================================
-- PAYMENTS TABLE
-- ============================================================
create table if not exists public.payments (
  id                    uuid default gen_random_uuid() primary key,
  user_id               uuid references auth.users on delete cascade not null,
  subscription_id       uuid references public.subscriptions(id) on delete set null,
  razorpay_payment_id   text unique,
  razorpay_order_id     text,
  razorpay_signature    text,
  amount                integer not null,          -- in paise (INR * 100)
  currency              text default 'INR' not null,
  status                text not null default 'pending'
                          check (status in ('pending', 'success', 'failed')),
  plan_name             text not null check (plan_name in ('GODZILLA', 'WOLF', 'TURTLE')),
  failure_reason        text,
  created_at            timestamptz default now() not null
);

create index if not exists idx_payments_user_id on public.payments(user_id);
create index if not exists idx_payments_status   on public.payments(status);

-- RLS for payments
alter table public.payments enable row level security;

create policy "Users can view own payments"
  on public.payments for select
  using (auth.uid() = user_id);

create policy "Service role can manage payments"
  on public.payments for all
  using (auth.role() = 'service_role');

-- ============================================================
-- GRANT PERMISSIONS
-- ============================================================
grant usage on schema public to anon, authenticated;
grant select on public.profiles to authenticated;
grant update on public.profiles to authenticated;
grant insert on public.profiles to authenticated;
grant select on public.subscriptions to authenticated;
grant select on public.payments to authenticated;

-- ============================================================
-- DONE - Schema applied successfully
-- ============================================================

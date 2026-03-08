# AccuraX — Backend Setup Guide

## 1. Supabase (Self-Hosted)

### Run Schema
In your Supabase SQL Editor, run the entire contents of:
```
/supabase/schema.sql
```

### Set Edge Function Secrets
In your Supabase dashboard → Edge Functions → Secrets, add:
```
RAZORPAY_KEY_ID         = rzp_live_xxxxxxxx
RAZORPAY_KEY_SECRET     = your_secret_here
SUPABASE_URL            = https://your-instance.com
SUPABASE_SERVICE_ROLE_KEY = your_service_role_key
```

### Deploy Edge Function
```bash
supabase functions deploy make-server-bdbd4811
```

---

## 2. Frontend .env

Copy `.env.example` to `.env` and fill in:
```
VITE_SUPABASE_URL=https://your-instance.com
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_API_URL=https://your-instance.com/functions/v1/make-server-bdbd4811
VITE_RAZORPAY_KEY_ID=rzp_live_xxxxxxxx
```

---

## 3. Razorpay

1. Sign up at https://razorpay.com
2. Get your Key ID and Key Secret from Dashboard → Settings → API Keys
3. Use **Test keys** during development, **Live keys** for production

---

## 4. Auth Settings (Supabase Dashboard)

- Authentication → Settings → Enable Email provider
- Set Site URL to your production domain
- Add Redirect URLs: `https://yourdomain.com/reset-password`

---

## 5. Flow Summary

```
User clicks "Buy Now"
  → If not logged in → /login → /signup
  → /payment page
    → Frontend calls /api/payment/create-order (Edge Fn)
      → Edge Fn creates Razorpay order
    → Razorpay modal opens
    → User pays
    → Frontend calls /api/payment/verify (Edge Fn)
      → Edge Fn verifies signature
      → Creates subscription record in DB
      → Creates payment record in DB
    → Redirect to /user-dashboard
      → Shows all active subscriptions
      → "Open Dashboard" buttons for each purchased plan
```

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host:   process.env.SMTP_HOST || 'smtp.hostinger.com',
  port:   parseInt(process.env.SMTP_PORT || '465'),
  secure: true, // SSL on port 465
  auth: {
    user: process.env.SMTP_USER || 'noreply@accurax.in',
    pass: process.env.SMTP_PASS || '',
  },
});

const FROM = `"AccuraX" <${process.env.SMTP_USER || 'noreply@accurax.in'}>`;
const BASE_URL = process.env.FRONTEND_URL || 'https://accurax.in';
const API_URL  = process.env.API_URL       || 'https://api.accurax.in';

// ── Send email confirmation ────────────────────────────────────────────────────
export async function sendConfirmationEmail(email, token) {
  const link = `${API_URL}/api/auth/confirm-email?token=${token}`;
  await transporter.sendMail({
    from: FROM,
    to: email,
    subject: 'Confirm your AccuraX account',
    html: `
      <div style="font-family:Arial,sans-serif;background:#000;color:#fff;padding:40px;max-width:600px;margin:auto;border-radius:12px;border:1px solid #222;">
        <h1 style="background:linear-gradient(to right,#3b82f6,#9333ea);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:8px;">AccuraX</h1>
        <h2 style="color:#fff;margin-bottom:16px;">Confirm Your Email</h2>
        <p style="color:#aaa;margin-bottom:24px;">Click the button below to confirm your email address and activate your AccuraX account.</p>
        <a href="${link}" style="display:inline-block;padding:14px 32px;background:linear-gradient(to right,#3b82f6,#9333ea);color:#fff;text-decoration:none;border-radius:8px;font-weight:bold;">Confirm Email</a>
        <p style="color:#555;font-size:12px;margin-top:32px;">Link expires in 24 hours. If you didn't sign up, ignore this email.</p>
        <p style="color:#444;font-size:11px;">Or paste this URL: ${link}</p>
      </div>
    `,
  });
}

// ── Send password reset email ──────────────────────────────────────────────────
export async function sendPasswordResetEmail(email, token) {
  const link = `${BASE_URL}/reset-password?token=${token}`;
  await transporter.sendMail({
    from: FROM,
    to: email,
    subject: 'Reset your AccuraX password',
    html: `
      <div style="font-family:Arial,sans-serif;background:#000;color:#fff;padding:40px;max-width:600px;margin:auto;border-radius:12px;border:1px solid #222;">
        <h1 style="background:linear-gradient(to right,#3b82f6,#9333ea);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:8px;">AccuraX</h1>
        <h2 style="color:#fff;margin-bottom:16px;">Reset Your Password</h2>
        <p style="color:#aaa;margin-bottom:24px;">Click the button below to reset your password. This link expires in 1 hour.</p>
        <a href="${link}" style="display:inline-block;padding:14px 32px;background:linear-gradient(to right,#3b82f6,#9333ea);color:#fff;text-decoration:none;border-radius:8px;font-weight:bold;">Reset Password</a>
        <p style="color:#555;font-size:12px;margin-top:32px;">If you didn't request this, ignore this email. Your password won't change.</p>
        <p style="color:#444;font-size:11px;">Or paste this URL: ${link}</p>
      </div>
    `,
  });
}

// ── Send payment confirmation email ───────────────────────────────────────────
export async function sendPaymentConfirmationEmail(email, fullName, planName, amount, expiresAt) {
  await transporter.sendMail({
    from: FROM,
    to: email,
    subject: `AccuraX — ${planName} subscription activated!`,
    html: `
      <div style="font-family:Arial,sans-serif;background:#000;color:#fff;padding:40px;max-width:600px;margin:auto;border-radius:12px;border:1px solid #222;">
        <h1 style="background:linear-gradient(to right,#3b82f6,#9333ea);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:8px;">AccuraX</h1>
        <h2 style="color:#fff;margin-bottom:8px;">Payment Confirmed! 🎉</h2>
        <p style="color:#aaa;margin-bottom:24px;">Hi ${fullName || 'there'}, your <strong style="color:#fff;">${planName}</strong> subscription is now active.</p>
        <div style="background:#111;border:1px solid #333;border-radius:8px;padding:20px;margin-bottom:24px;">
          <p style="color:#aaa;margin:4px 0;">Plan: <strong style="color:#fff;">${planName}</strong></p>
          <p style="color:#aaa;margin:4px 0;">Amount Paid: <strong style="color:#fff;">₹${amount}</strong></p>
          <p style="color:#aaa;margin:4px 0;">Valid Until: <strong style="color:#fff;">${new Date(expiresAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}</strong></p>
        </div>
        <a href="${BASE_URL}/user-dashboard" style="display:inline-block;padding:14px 32px;background:linear-gradient(to right,#3b82f6,#9333ea);color:#fff;text-decoration:none;border-radius:8px;font-weight:bold;">Go to Dashboard</a>
      </div>
    `,
  });
}
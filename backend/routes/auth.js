import { Router } from 'express';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';
import { query } from '../db/mysql.js';
import { signToken, requireAuth } from '../middleware/auth.js';
import { sendConfirmationEmail, sendPasswordResetEmail } from '../utils/mailer.js';

const router = Router();

// ── POST /api/auth/register ────────────────────────────────────────────────────
router.post('/register', async (req, res) => {
  try {
    const { email, password, full_name, phone } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }
    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }

    // Check if user exists
    const existing = await query('SELECT id FROM users WHERE email = ?', [email.toLowerCase()]);
    if (existing.length > 0) {
      return res.status(409).json({ error: 'An account with this email already exists' });
    }

    const id = uuidv4();
    const password_hash = await bcrypt.hash(password, 12);
    const email_confirm_token = crypto.randomBytes(32).toString('hex');
    const email_confirm_expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24h

    await query(
      `INSERT INTO users (id, email, password_hash, full_name, phone, email_confirmed, email_confirm_token, email_confirm_expires)
       VALUES (?, ?, ?, ?, ?, 0, ?, ?)`,
      [id, email.toLowerCase(), password_hash, full_name || null, phone || null, email_confirm_token, email_confirm_expires]
    );

    // Send confirmation email (don't block registration if it fails)
    try {
      await sendConfirmationEmail(email.toLowerCase(), email_confirm_token);
    } catch (emailErr) {
      console.error('Failed to send confirmation email:', emailErr.message);
    }

    return res.status(201).json({
      message: 'Account created! Please check your email to confirm your account.',
    });
  } catch (err) {
    console.error('Register error:', err);
    return res.status(500).json({ error: 'Registration failed. Please try again.' });
  }
});

// ── POST /api/auth/login ───────────────────────────────────────────────────────
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const rows = await query('SELECT * FROM users WHERE email = ?', [email.toLowerCase()]);
    if (rows.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = rows[0];
    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    if (!user.email_confirmed) {
      return res.status(403).json({ error: 'Email not confirmed. Please check your inbox.' });
    }

    // Update last sign in
    await query('UPDATE users SET last_sign_in_at = NOW() WHERE id = ?', [user.id]);

    const token = signToken(user.id, user.email);

    return res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        created_at: user.created_at,
        last_sign_in_at: new Date().toISOString(),
      },
      profile: {
        id: user.id,
        full_name: user.full_name,
        phone: user.phone,
        avatar_url: user.avatar_url,
        created_at: user.created_at,
        updated_at: user.updated_at,
      },
    });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ error: 'Login failed. Please try again.' });
  }
});

// ── GET /api/auth/me ──────────────────────────────────────────────────────────
router.get('/me', requireAuth, async (req, res) => {
  try {
    const rows = await query('SELECT * FROM users WHERE id = ?', [req.userId]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    const user = rows[0];
    return res.json({
      user: {
        id: user.id,
        email: user.email,
        created_at: user.created_at,
        last_sign_in_at: user.last_sign_in_at,
      },
      profile: {
        id: user.id,
        full_name: user.full_name,
        phone: user.phone,
        avatar_url: user.avatar_url,
        created_at: user.created_at,
        updated_at: user.updated_at,
      },
    });
  } catch (err) {
    console.error('Me error:', err);
    return res.status(500).json({ error: 'Failed to fetch user' });
  }
});

// ── GET /api/auth/confirm-email ────────────────────────────────────────────────
router.get('/confirm-email', async (req, res) => {
  const FRONTEND = process.env.FRONTEND_URL || 'https://accurax.in';
  try {
    const { token } = req.query;
    if (!token) {
      return res.redirect(`${FRONTEND}/login?error=invalid-token`);
    }

    const rows = await query(
      'SELECT * FROM users WHERE email_confirm_token = ? AND email_confirm_expires > NOW()',
      [token]
    );

    if (rows.length === 0) {
      return res.redirect(`${FRONTEND}/login?error=expired-token`);
    }

    await query(
      'UPDATE users SET email_confirmed = 1, email_confirm_token = NULL, email_confirm_expires = NULL WHERE id = ?',
      [rows[0].id]
    );

    return res.redirect(`${FRONTEND}/login?confirmed=true`);
  } catch (err) {
    console.error('Confirm email error:', err);
    return res.redirect(`${FRONTEND}/login?error=server-error`);
  }
});

// ── POST /api/auth/resend-confirmation ────────────────────────────────────────
router.post('/resend-confirmation', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email is required' });

    const rows = await query('SELECT * FROM users WHERE email = ?', [email.toLowerCase()]);
    if (rows.length === 0) {
      // Don't reveal if email exists
      return res.json({ message: 'If that email is registered, a confirmation link was sent.' });
    }

    const user = rows[0];
    if (user.email_confirmed) {
      return res.status(400).json({ error: 'Email is already confirmed. Please log in.' });
    }

    const email_confirm_token = crypto.randomBytes(32).toString('hex');
    const email_confirm_expires = new Date(Date.now() + 24 * 60 * 60 * 1000);

    await query(
      'UPDATE users SET email_confirm_token = ?, email_confirm_expires = ? WHERE id = ?',
      [email_confirm_token, email_confirm_expires, user.id]
    );

    await sendConfirmationEmail(email.toLowerCase(), email_confirm_token);

    return res.json({ message: 'Confirmation email resent. Check your inbox.' });
  } catch (err) {
    console.error('Resend confirmation error:', err);
    return res.status(500).json({ error: 'Failed to resend confirmation email.' });
  }
});

// ── POST /api/auth/forgot-password ────────────────────────────────────────────
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email is required' });

    const rows = await query('SELECT id FROM users WHERE email = ?', [email.toLowerCase()]);
    // Always return success to prevent email enumeration
    if (rows.length === 0) {
      return res.json({ message: 'If that email is registered, a reset link was sent.' });
    }

    const token = crypto.randomBytes(32).toString('hex');
    const expires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    await query(
      'UPDATE users SET password_reset_token = ?, password_reset_expires = ? WHERE id = ?',
      [token, expires, rows[0].id]
    );

    await sendPasswordResetEmail(email.toLowerCase(), token);

    return res.json({ message: 'Password reset link sent to your email.' });
  } catch (err) {
    console.error('Forgot password error:', err);
    return res.status(500).json({ error: 'Failed to send reset email.' });
  }
});

// ── POST /api/auth/reset-password ─────────────────────────────────────────────
router.post('/reset-password', async (req, res) => {
  try {
    const { token, password } = req.body;
    if (!token || !password) {
      return res.status(400).json({ error: 'Token and new password are required' });
    }
    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }

    const rows = await query(
      'SELECT * FROM users WHERE password_reset_token = ? AND password_reset_expires > NOW()',
      [token]
    );

    if (rows.length === 0) {
      return res.status(400).json({ error: 'Reset link is invalid or has expired.' });
    }

    const password_hash = await bcrypt.hash(password, 12);
    await query(
      'UPDATE users SET password_hash = ?, password_reset_token = NULL, password_reset_expires = NULL WHERE id = ?',
      [password_hash, rows[0].id]
    );

    return res.json({ message: 'Password updated successfully. You can now log in.' });
  } catch (err) {
    console.error('Reset password error:', err);
    return res.status(500).json({ error: 'Failed to reset password.' });
  }
});

export default router;
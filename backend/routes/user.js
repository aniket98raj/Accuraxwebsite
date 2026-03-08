import { Router } from 'express';
import { query } from '../db/mysql.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();

// ── GET /api/user/profile ──────────────────────────────────────────────────────
router.get('/profile', requireAuth, async (req, res) => {
  try {
    const rows = await query('SELECT * FROM users WHERE id = ?', [req.userId]);
    if (rows.length === 0) return res.status(404).json({ error: 'User not found' });
    const u = rows[0];
    return res.json({
      id:         u.id,
      full_name:  u.full_name,
      phone:      u.phone,
      avatar_url: u.avatar_url,
      created_at: u.created_at,
      updated_at: u.updated_at,
    });
  } catch (err) {
    console.error('Get profile error:', err);
    return res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

// ── PUT /api/user/profile ──────────────────────────────────────────────────────
router.put('/profile', requireAuth, async (req, res) => {
  try {
    const { full_name, phone } = req.body;
    await query(
      'UPDATE users SET full_name = ?, phone = ?, updated_at = NOW() WHERE id = ?',
      [full_name ?? null, phone ?? null, req.userId]
    );
    const rows = await query('SELECT * FROM users WHERE id = ?', [req.userId]);
    const u = rows[0];
    return res.json({
      id:         u.id,
      full_name:  u.full_name,
      phone:      u.phone,
      avatar_url: u.avatar_url,
      created_at: u.created_at,
      updated_at: u.updated_at,
    });
  } catch (err) {
    console.error('Update profile error:', err);
    return res.status(500).json({ error: 'Failed to update profile' });
  }
});

// ── GET /api/user/subscriptions ────────────────────────────────────────────────
router.get('/subscriptions', requireAuth, async (req, res) => {
  try {
    // Auto-expire subscriptions past their expiry date
    await query(
      `UPDATE subscriptions SET status = 'expired'
       WHERE user_id = ? AND status = 'active' AND expires_at < NOW()`,
      [req.userId]
    );

    const rows = await query(
      'SELECT * FROM subscriptions WHERE user_id = ? ORDER BY created_at DESC',
      [req.userId]
    );
    return res.json(rows);
  } catch (err) {
    console.error('Get subscriptions error:', err);
    return res.status(500).json({ error: 'Failed to fetch subscriptions' });
  }
});

export default router;

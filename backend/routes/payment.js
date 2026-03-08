import { Router } from 'express';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';
import { query } from '../db/mysql.js';
import { requireAuth } from '../middleware/auth.js';
import { sendPaymentConfirmationEmail } from '../utils/mailer.js';

const router = Router();

const razorpay = new Razorpay({
  key_id:     process.env.RAZORPAY_KEY_ID     || 'rzp_test_SOeqXdmB1oEbtZ',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'BR77nFcYxoQQptIpp72xY9se',
});

// ── POST /api/payment/create-order ────────────────────────────────────────────
router.post('/create-order', requireAuth, async (req, res) => {
  try {
    const { amount, currency = 'INR', planName } = req.body;
    if (!amount || !planName) {
      return res.status(400).json({ error: 'amount and planName are required' });
    }

    const order = await razorpay.orders.create({
      amount: Math.round(amount * 100), // paise
      currency,
      receipt: `rcpt_${uuidv4().split('-')[0]}`,
      notes: { planName, userId: req.userId },
    });

    return res.json({
      orderId:  order.id,
      amount:   order.amount,
      currency: order.currency,
      keyId:    process.env.RAZORPAY_KEY_ID || 'rzp_test_SOeqXdmB1oEbtZ',
    });
  } catch (err) {
    console.error('Create order error:', err);
    return res.status(500).json({ error: 'Failed to create payment order' });
  }
});

// ── POST /api/payment/verify ───────────────────────────────────────────────────
router.post('/verify', requireAuth, async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      planName,
      amount,
    } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ error: 'Missing payment verification fields' });
    }

    // ── Verify Razorpay signature ──────────────────────────────────────────────
    const keySecret = process.env.RAZORPAY_KEY_SECRET || 'BR77nFcYxoQQptIpp72xY9se';
    const expectedSignature = crypto
      .createHmac('sha256', keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ error: 'Payment signature verification failed' });
    }

    // ── Save to DB ─────────────────────────────────────────────────────────────
    const userId = req.userId;
    const paymentId = uuidv4();
    const subscriptionId = uuidv4();
    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days

    // Insert subscription
    await query(
      `INSERT INTO subscriptions (id, user_id, plan_name, plan_price, status, payment_id, razorpay_order_id, started_at, expires_at)
       VALUES (?, ?, ?, ?, 'active', ?, ?, NOW(), ?)`,
      [subscriptionId, userId, planName, amount, paymentId, razorpay_order_id, expiresAt]
    );

    // Insert payment record
    await query(
      `INSERT INTO payments (id, user_id, subscription_id, razorpay_payment_id, razorpay_order_id, razorpay_signature, amount, currency, status, plan_name)
       VALUES (?, ?, ?, ?, ?, ?, ?, 'INR', 'success', ?)`,
      [paymentId, userId, subscriptionId, razorpay_payment_id, razorpay_order_id, razorpay_signature, amount, planName]
    );

    // Send confirmation email (non-blocking)
    try {
      const userRows = await query('SELECT email, full_name FROM users WHERE id = ?', [userId]);
      if (userRows.length > 0) {
        await sendPaymentConfirmationEmail(
          userRows[0].email,
          userRows[0].full_name,
          planName,
          amount,
          expiresAt
        );
      }
    } catch (emailErr) {
      console.error('Payment email failed:', emailErr.message);
    }

    return res.json({ success: true, subscriptionId });
  } catch (err) {
    console.error('Verify payment error:', err);
    return res.status(500).json({ error: 'Payment verification failed' });
  }
});

export default router;

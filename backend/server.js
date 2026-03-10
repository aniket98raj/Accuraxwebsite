import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import authRoutes from './routes/auth.js';
import paymentRoutes from './routes/payment.js';
import userRoutes from './routes/user.js';
import { initDB } from './db/mysql.js';

const app = express();
const PORT = process.env.PORT || 3000;

// ── Middleware ──────────────────────────────────────────────────
app.use(cors({
  origin: [
    process.env.FRONTEND_URL || 'https://accurax.in',
    'https://accurax.in',
    'https://www.accurax.in',
    'http://localhost:5173',
  ],
  credentials: true,
}));
app.use(express.json());

// ── API Routes ──────────────────────────────────────────────────
app.use('/api/auth', authRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/user', userRoutes);

// ── Health Check ────────────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ── Start ───────────────────────────────────────────────────────
async function start() {
  await initDB();
  app.listen(PORT, () => {
    console.log(`✅ AccuraX API server running on port ${PORT}`);
  });
}

start().catch((err) => {
  console.error('❌ Failed to start server:', err);
  process.exit(1);
});

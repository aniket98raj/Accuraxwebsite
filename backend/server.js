import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

import authRoutes from './routes/auth.js';
import paymentRoutes from './routes/payment.js';
import userRoutes from './routes/user.js';
import { initDB } from './db/mysql.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// ── Middleware ─────────────────────────────────────────────────────────────────
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true,
}));
app.use(express.json());

// ── API Routes ─────────────────────────────────────────────────────────────────
app.use('/api/auth', authRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/user', userRoutes);

// ── Health Check ───────────────────────────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ── Serve React Frontend (production) ─────────────────────────────────────────
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

// Only serve index.html for non-API GET requests (prevents API 404s returning HTML)
app.get('*', (req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: `API route not found: ${req.path}` });
  }
  res.sendFile(path.join(distPath, 'index.html'));
});

// ── Start ──────────────────────────────────────────────────────────────────────
async function start() {
  await initDB(); // create tables if not exist
  app.listen(PORT, () => {
    console.log(`✅ AccuraX server running on port ${PORT}`);
  });
}

start().catch((err) => {
  console.error('❌ Failed to start server:', err);
  process.exit(1);
});
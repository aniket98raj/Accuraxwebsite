import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ── Connection Pool ────────────────────────────────────────────────────────────
export const pool = mysql.createPool({
  host:     process.env.DB_HOST     || 'localhost',
  port:     parseInt(process.env.DB_PORT || '3306'),
  user:     process.env.DB_USER     || 'root',
  password: process.env.DB_PASS     || '',
  database: process.env.DB_NAME     || 'accurax',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  timezone: '+00:00',
});

// ── Helper: run a query ────────────────────────────────────────────────────────
export async function query(sql, params = []) {
  const [rows] = await pool.execute(sql, params);
  return rows;
}

// ── Initialize DB: create tables if they don't exist ──────────────────────────
export async function initDB() {
  const schema = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf-8');
  // Split on semicolons and run each statement
  const statements = schema
    .split(';')
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  for (const stmt of statements) {
    await pool.execute(stmt);
  }
  console.log('✅ Database schema initialized');
}

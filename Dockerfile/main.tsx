# ═══════════════════════════════════════════════════════════════════
#  AccuraX — Full Stack Docker Image
#  Stage 1: Build the React frontend with Vite
#  Stage 2: Run Express (serves React dist/ + all API routes)
# ═══════════════════════════════════════════════════════════════════

# ── Stage 1: Build React frontend ─────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Install all dependencies (devDeps needed for Vite build)
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Build React app → produces /app/dist
RUN npm run build

# ── Stage 2: Production runtime ───────────────────────────────────
FROM node:20-alpine AS runner

WORKDIR /app

# Install production dependencies only (no Vite, no devDeps)
COPY package*.json ./
RUN npm install --omit=dev

# Copy backend source code
COPY backend/ ./backend/

# Copy built React frontend from Stage 1
COPY --from=builder /app/dist ./dist

# Expose Express port
EXPOSE 3000

# Health check — Coolify uses this to know when the app is ready
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD wget -qO- http://localhost:3000/api/health || exit 1

# Start Express server (serves React + API)
CMD ["node", "backend/server.js"]

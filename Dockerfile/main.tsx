# ═══════════════════════════════════════════════════════════════════════════════
#  AccuraX — Full Stack Dockerfile
#  Stage 1 : Build React frontend (Vite)
#  Stage 2 : Production Express server (serves React + all /api/* routes)
# ═══════════════════════════════════════════════════════════════════════════════

# ── Stage 1: Build React ───────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files first (Docker layer cache — only reinstalls if changed)
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Build → produces /app/dist
RUN npm run build

# ── Stage 2: Production runtime ───────────────────────────────────────────────
FROM node:20-alpine AS runner

WORKDIR /app

# Production deps only (no Vite/devDeps — smaller image)
COPY package*.json ./
RUN npm install --omit=dev

# Copy backend source
COPY backend/ ./backend/

# Copy compiled React frontend from Stage 1
COPY --from=builder /app/dist ./dist

# Expose Express port
EXPOSE 3000

# Coolify uses this to know when the app is ready
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD wget -qO- http://localhost:3000/api/health || exit 1

# Start Express (serves dist/ static files + /api/* routes)
CMD ["node", "backend/server.js"]

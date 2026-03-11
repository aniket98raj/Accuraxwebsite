# ============================================================
# AccuraX — Multi-stage Dockerfile
# Stage 1 : Build the React/Vite frontend → dist/
# Stage 2 : Run the Express backend + serve the built frontend
# ============================================================

# ── Stage 1: Build React frontend ────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files first (better layer caching)
COPY package*.json ./
COPY pnpm-lock.yaml* ./

# Install ALL dependencies (dev deps needed for Vite build)
RUN npm install

# Copy all source files
COPY . .

# Build the React app → /app/dist
RUN npm run build

# ── Stage 2: Production runtime ──────────────────────────────
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ONLY production dependencies (no Vite/Tailwind/etc.)
RUN npm install --omit=dev

# Copy the backend source
COPY backend/ ./backend/

# Copy the built React frontend from Stage 1
# backend/server.js looks for ../dist → /app/dist ✓
COPY --from=builder /app/dist ./dist

# Expose port 3000
EXPOSE 3000

# Start the Express server
CMD ["node", "backend/server.js"]

# ── Stage 1: Build React frontend ─────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install ALL deps (including devDeps for Vite build)
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build
# dist/ is now at /app/dist ✅

# ── Stage 2: Production server ────────────────────────────────────────────────
FROM node:20-alpine AS runner

WORKDIR /app

# Copy package files and install production deps only
COPY package*.json ./
RUN npm install --omit=dev

# Copy backend source
COPY backend/ ./backend/

# Copy the built React frontend from Stage 1
COPY --from=builder /app/dist ./dist

# Expose the port Express listens on
EXPOSE 3000

# Start the Express server (serves both API + React static files)
CMD ["node", "backend/server.js"]

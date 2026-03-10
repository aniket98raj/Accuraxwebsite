# ── Stage 1: Build React frontend ─────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ── Stage 2: Production server ────────────────────────────────────────────────
FROM node:20-alpine AS runner

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY backend/ ./backend/
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "backend/server.js"]

# ============================================================
# AccuraX — Multi-stage Dockerfile
# Stage 1 : Build the React/Vite frontend → dist/
# Stage 2 : Run the Express backend + serve the built frontend
# ============================================================

# ── Stage 1: Build React frontend ────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# ── Stage 2: Production runtime ──────────────────────────────
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY backend/ ./backend/

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "backend/server.js"]

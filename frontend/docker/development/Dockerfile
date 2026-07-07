# ============================================
# Stage 1: Dependencies Installation Stage
# ============================================

ARG NODE_VERSION=26.3.0

FROM node:${NODE_VERSION} AS dependencies

WORKDIR /app

COPY package.json ./

# установка зависимостей с кешированием
RUN --mount=type=cache,target=/root/.npm \
    --mount=type=cache,target=/usr/local/share/.cache/yarn \
    --mount=type=cache,target=/root/.local/share/pnpm/store \
  if [ -f package.json ]; then \
    npm install; \
  else \
    echo "No lockfile found." && exit 1; \
  fi

# ============================================
# Stage 2: Build Next.js application in standalone mode
# ============================================

FROM node:${NODE_VERSION} AS builder

WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

# Создаем .env из примера
RUN cp .env.example.docker.dev .env


FROM node:${NODE_VERSION} AS runner

WORKDIR /app

ENV NODE_ENV=development
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Next.js collects completely anonymous telemetry data about general usage (https://nextjs.org/telemetry).
ENV NEXT_TELEMETRY_DISABLED=1

# Switch to non-root user for security best practices
USER node

# Expose port 3000 to allow HTTP traffic
EXPOSE 3000

# Start Next.js standalone server
CMD ["npm", "run", "dev"]
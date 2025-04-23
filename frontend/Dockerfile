FROM node:22-bullseye AS base
WORKDIR /app

FROM base AS deps
COPY package.json package-lock.json ./
RUN if [ ! -f package-lock.json ]; then echo "package-lock.json not found!" && exit 1; fi
RUN npm ci

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . ./

# Ensure LightningCSS works
RUN npm rebuild lightningcss --platform=linux --arch=x64
RUN npm list lightningcss

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

RUN npm run build

FROM base AS runner
WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]

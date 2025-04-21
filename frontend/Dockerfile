FROM node:22-bullseye AS base
WORKDIR /app

FROM base AS deps
COPY package.json package-lock.json ./
RUN rm -rf node_modules package-lock.json
RUN npm install

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . ./
RUN npm rebuild lightningcss --platform=linux --arch=x64
RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]

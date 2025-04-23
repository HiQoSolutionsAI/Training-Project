FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN if [ ! -f package-lock.json ]; then echo "package-lock.json not found!" && exit 1; fi
RUN npm ci --only=production

COPY . .

ARG DB_HOST
ARG DB_PORT
ARG FRONTEND_URL

RUN npm run build

EXPOSE 3001

CMD ["node", "dist/main"]

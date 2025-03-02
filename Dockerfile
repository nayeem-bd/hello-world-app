FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

FROM node:18-alpine

WORKDIR /app

COPY --from=build /app /app

RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodeuser -u 1001 -G nodejs

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "index.js"]

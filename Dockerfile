#!/bin/bash
FROM node:16 as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:16-alpine
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app ./
CMD ["npm", "run", "start:dev"]
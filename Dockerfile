FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY ./package*.json ./
RUN npm ci --omit=dev
COPY --from=0 /app/build ./build
EXPOSE 3000
CMD ["node", "build"]
FROM node:16.14.2

WORKDIR /app

COPY . .

RUN node dist/main

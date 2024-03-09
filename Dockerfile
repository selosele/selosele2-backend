FROM node:16.14.2

WORKDIR /app

COPY package*.json ./

COPY . .

CMD ["pm2-runtime", "start", "ecosystem.config.js", "--env", "production"]

FROM node:16.14.2

WORKDIR /app

RUN npm install -g @nestjs/cli
RUN npm install -g pm2
RUN nvm use 16.14.2

COPY . .

CMD ["pm2-runtime", "start", "ecosystem.config.js", "--env", "production"]

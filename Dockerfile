FROM node:16.14.2

WORKDIR /app

RUN npm install --global @nestjs/cli
RUN npm install --global pm2

COPY . .

CMD ["pm2-runtime", "dist/main.js"]

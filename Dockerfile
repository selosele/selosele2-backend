FROM node:16.14.2

WORKDIR /app

COPY package*.json ./

COPY . .

CMD ["node", "dist/main.js"]

FROM node:16.14.2

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm run build

CMD ["npm", "run", "start:prod"]

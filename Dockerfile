FROM node:16.14.2

COPY package*.json ./

COPY . .

CMD ["npm", "run", "start:prod"]

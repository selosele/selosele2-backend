FROM node:16.14.2

WORKDIR /app

COPY package*.json ./

RUN npm install -g @nestjs/cli
RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "start"]

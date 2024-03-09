FROM node:16.14.2

WORKDIR /app

COPY package*.json ./

RUN npm config set proxy http://35.212.141.160
RUN npm config set https-proxy https://35.212.141.160

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]

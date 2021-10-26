FROM node:14.18.1-alpine

WORKDIR /app

COPY package* ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
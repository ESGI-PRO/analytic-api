FROM node:18-alpine

WORKDIR /src

COPY package.json package-lock.json ./

RUN npm install
RUN npm i -g @nestjs/cli
RUN npm install @nestjs/mongoose mongoose

COPY . .

EXPOSE 8085

CMD npm run start:dev
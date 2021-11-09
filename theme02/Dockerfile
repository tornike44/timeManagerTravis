FROM node:lts-alpine3.14

COPY . /app
WORKDIR /app

RUN npm i -g @vue/cli
RUN npm install

EXPOSE 8080

CMD ["npm", "run", "serve"]
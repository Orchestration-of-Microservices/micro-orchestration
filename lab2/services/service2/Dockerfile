FROM node:12

WORKDIR /usr/src/app

COPY . .

RUN npm install --production

EXPOSE 3003

CMD [ "npm", "start" ]

FROM node:12

WORKDIR /usr/src/app

COPY . .

RUN npm install --production
RUN npm rebuild

EXPOSE 3000

CMD [ "npm", "start" ]

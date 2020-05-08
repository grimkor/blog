FROM node:14-alpine

WORKDIR /app

COPY . /app

RUN npm i -g pm2

RUN npm i && npm run build

EXPOSE 3000

ENV REACT_APP_API="http://api:5000"

USER node

CMD ["pm2-runtime", "npm", "--", "start"]

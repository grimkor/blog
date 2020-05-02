FROM node:14-alpine

WORKDIR /app

COPY pages /app

RUN npm i -g pm2

RUN npm i --production && npm run build

EXPOSE 3000

USER node

CMD ["pm2-runtime", "npm", "--", "start"]

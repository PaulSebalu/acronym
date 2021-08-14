FROM node:12

WORKDIR /home/christ/Kreyet/g2i/dck

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "node", "build/index.js" ]
FROM node:latest
RUN  mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
RUN npm install
RUN npm run seed
EXPOSE 3333
CMD ["node", "server/index.js"]
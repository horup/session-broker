FROM node:12
WORKDIR /usr/src
COPY ./shared/* ./shared/
WORKDIR /usr/src/masterserver

COPY ./masterserver/package*.json ./
RUN npm install
COPY /masterserver .
RUN npm run build

EXPOSE 8080
CMD ["npm", "start"]
FROM node:12
WORKDIR /usr/src/masterserver
COPY ./masterserver/* ./masterserver
COPY ./shared/* ./shared

WORKDIR /usr/src/masterserver/masterserver
RUN npm install
RUN npm run build
EXPOSE 8080
CMD ["npm", "start"]
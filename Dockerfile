FROM node:12
WORKDIR /usr/src/shared
COPY ./shared/ ./
RUN npm install --unsafe-perm

WORKDIR /usr/src/masterserver
COPY ./masterserver/package*.json ./
RUN npm install --unsafe-perm
COPY ./masterserver/ ./
RUN npm run build --unsafe-perm

EXPOSE 8080
CMD ["npm", "start"]
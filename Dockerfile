FROM node

RUN mkdir -p /appdir
WORKDIR /appdir

COPY package.json /appdir
RUN npm install

COPY . /appdir

EXPOSE 8080
CMD [ "node", "app.js" ]

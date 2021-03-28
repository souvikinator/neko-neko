FROM node:alpine

#set work dir
WORKDIR /apiservice

#copy and paste stuff
COPY . /apiservice

#install requirements
RUN npm install

#set commands
CMD npm run prodStart

#expose the port
EXPOSE 5000

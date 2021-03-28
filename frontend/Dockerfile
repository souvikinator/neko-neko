FROM node:alpine as neko-neko

#setting work directory
WORKDIR /client

#copy files to pwd
COPY . ./

#install files
RUN npm install

#bild
RUN npm run build

#stage2
FROM nginx:latest

COPY --from=neko-neko /client/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx","-g","daemon off;"]


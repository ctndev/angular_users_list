FROM node:alpine as nestjs


WORKDIR /app
COPY package*.json /app/
RUN npm install --silent
COPY . .
COPY config ./
COPY config/* ./
RUN npm run build

EXPOSE 3005
#CMD [ "node", "dist/main" ]
CMD [ "npm","run", "start:dev" ]
# FROM nginx:alpine
# VOLUME /var/cache/nginx
# COPY --from=nestjs app/dist /usr/share/nginx/html
# COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

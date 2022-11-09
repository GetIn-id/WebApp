FROM node:18.12.1 as build
WORKDIR /client

COPY package.json .
COPY package-lock.json .

RUN npm install
COPY . .

RUN npm run build
FROM nginx:1.19
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
RUN echo $(ls)
COPY --from=build /client/build /usr/share/nginx/html

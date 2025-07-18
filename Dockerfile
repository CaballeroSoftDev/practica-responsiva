FROM node:18-alpine AS build
WORKDIR /app
COPY ./ /app/
RUN ls
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist/practica-responsiva /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t practica-responsiva .
# docker run -d -p 80:80 --name docker-practica practica-responsiva
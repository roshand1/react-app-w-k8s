# Specify a base image
# https://hub.docker.com/_/node
FROM node:14.15.1-alpine as builder

WORKDIR /app

# Copy package.json file
# npm install only worries about changes in package.json file
# therefore when you make anychanges in other folder you don't need
# to reinstall all the necessary packages. This change will make
# build faster.
# COPY ./package.json ./

# This is needed for Elastic Beanstalk
COPY ./package*.json ./
# Install some dependencies
RUN npm install

# Copy your project file
COPY . .

# This will run webpack to create a bundle like it does in our local machine
RUN npm run build

FROM nginx

# This instruction does not do anything when running in local machine.
# ElasticBeanstalk uses this port to map.
EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# we ignore all other files except index.html which is main index page where
# react app is imported
# and javascript bundle.
# COPY --from=builder /app/public /usr/share/nginx/html
# COPY --from=builder /app/app /usr/share/nginx/html

# Needed this for Elasticbeanstalk
COPY --from=0 /app/public /usr/share/nginx/html
COPY --from=0 /app/app /usr/share/nginx/html

# We don't have to write start nginx as default command for ngnx is to start.

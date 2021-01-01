FROM node:14.15.0-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependency
COPY ./package.json ./
RUN npm install

## Bundle app resource 
COPY . .

CMD [ "npm", "run", "start"]

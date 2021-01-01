FROM node:alpine 

# Create app directory
WORKDIR /usr/src/app

# Install app dependency
COPY ./package.json ./
RUN npm install

# Bundle app resource
COPY . .

# Complie
RUN npm run compile

# Set env var PORT num
EXPOSE 9000
ENV PORT="9000"

# Run application
CMD ["node", "build/frameworks/web/index.js"]
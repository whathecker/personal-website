FROM node:alpine as builder

# Create app directory
WORKDIR /usr/src/app
# Install app dependency
COPY ./package*.json ./
RUN npm install
# Bundle app resource
COPY . .
# Complie
RUN npm run build


FROM node:alpine

WORKDIR /usr/src/app

COPY ./package*.json ./

## Run npm install without devDependencies
RUN npm install --only=production

## COPY build artifact from builder
COPY --from=builder /usr/src/app/build ./build

EXPOSE 9000
# Run application
CMD ["node", "build/frameworks/web/index.js"]
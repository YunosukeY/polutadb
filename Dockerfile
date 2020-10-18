FROM node:14 AS builder
WORKDIR /work
CMD npm install && npm run build
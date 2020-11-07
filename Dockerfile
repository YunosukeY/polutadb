FROM node:14 AS builder
WORKDIR /work
RUN npm install
CMD ["npm", "run", "build"]

FROM node:14.15.4-alpine3.10
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm install
ENV NODE_ENV=production
COPY . /app
RUN npm run build
EXPOSE 8080
CMD ["npm", "start"]


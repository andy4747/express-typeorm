# stage 1 building the code
FROM node as builder
WORKDIR /usr/app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

#stage 2
FROM node
WORKDIR /usr/app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install --production
COPY --from=builder /usr/app/dist ./dist
COPY .env .
EXPOSE 8080
CMD ["yarn", "start"]

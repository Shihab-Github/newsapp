#stage 1
FROM node:20-alpine as BUILD_IMAGE
WORKDIR /newsapp

COPY ./ ./

RUN npm install
RUN npm run build 
RUN rm -rf node_modules
RUN npm install --production

#stage 2
FROM node:20-alpine 
ENV NODE_ENV production
WORKDIR /newsapp

COPY --from=BUILD_IMAGE /newsapp/node_modules ./node_modules
COPY --from=BUILD_IMAGE /newsapp/package*.json ./
COPY --from=BUILD_IMAGE /newsapp/public ./public
COPY --from=BUILD_IMAGE /newsapp/.next ./.next

EXPOSE 3000

CMD [ "npm", "start" ]

ARG NODE_VERSION="lts"
ARG ALPINE_VERSION="3.17"

FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS base

RUN apk update \
  && apk add openssl1.1-compat

WORKDIR /app

COPY entrypoint.sh /usr/local/bin/

RUN chmod +x /usr/local/bin/entrypoint.sh

COPY package.json ./

COPY prisma ./prisma/

RUN npm i

COPY . ./

RUN npx prisma version

ENTRYPOINT ["entrypoint.sh"]
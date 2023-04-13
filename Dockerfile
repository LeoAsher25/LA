FROM node:16-alpine as builder

WORKDIR /app

RUN apk update && apk upgrade
RUN apk add git

COPY . .

RUN yarn install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive

RUN yarn build
RUN yarn generate

FROM node:16-alpine

WORKDIR /app

COPY --from=builder /app  .

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000

CMD [ "yarn", "start" ]

FROM  node:latest as base
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5000


FROM base as development
CMD [ "npm","run","dev" ]

FROM base as production
CMD [ "npm","run","start" ]
FROM node:21-alpine3.17 as BUILD_IMAGE
WORKDIR /app/react-app

COPY package.json .

RUN npm install --quiet -no-optional --no-fund --loglevel=error

COPY . .

RUN npm run build

EXPOSE 8080
CMD ["npm", "run", "preview" ]


FROM node:21-alpine3.17
WORKDIR /app/

RUN apt install git-all && git clone https://github.com/Baniomash/gerador-voucher-airdropv3-front.git

WORKDIR /app/gerador-voucher-airdropv3-front/

RUN npm install && npm run build && npm i typescript

EXPOSE 8080

CMD ["npm", "run", "preview" ]


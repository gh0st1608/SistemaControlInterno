FROM node:10
WORKDIR /app
COPY package*.json ./
COPY tsconfig.json ./
COPY . .
RUN npm install
RUN npm install pm2 -g
RUN npm run build
CMD ["pm2-runtime","index.js"]








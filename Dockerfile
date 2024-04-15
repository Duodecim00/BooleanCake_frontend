#las versiones de node docker estan en https://hub.docker.com
FROM node:alpine

WORKDIR /app

#copiar package.json
COPY package*.json .

#instalar paquetes
RUN npm install

#copiar los archivos restantes
COPY . .
COPY vite.config.js .

#finalmente construir el proyecto
RUN npm run build

EXPOSE 5175

CMD ["npm", "run", "preview"]
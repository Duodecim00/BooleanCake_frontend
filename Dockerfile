# Establecer la imagen base para construir la aplicación
FROM node:latest as build

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos del proyecto al directorio de trabajo
COPY . .

# Instalar las dependencias del proyecto
RUN npm install

# Construir la aplicación de producción
RUN npm run build
# RUN npm run dev

# Establecer la imagen base para servir la aplicación
FROM node:alpine

# Copiar los archivos de la aplicación construida desde la etapa de construcción
COPY --from=build /app/build /app

# Instalar el servidor estático para servir la aplicación
RUN npm install -g serve

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación cuando se ejecute el contenedor
CMD ["npm", "start"]
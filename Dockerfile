# Etapa 1: Construcción
FROM node:18-alpine AS build

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el package.json y package-lock.json para instalar las dependencias
COPY package*.json ./
RUN npm install

# Copiar todo el código de la aplicación al contenedor
COPY . .

# Construir la aplicación para producción
RUN npm run build --prod

# Etapa 2: Servir con Nginx
FROM nginx:alpine

# Eliminar el archivo de configuración predeterminado de Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copiar la configuración personalizada de Nginx (opcional)
# Si tienes un archivo nginx.conf, descomenta la siguiente línea:
# COPY nginx.conf /etc/nginx/conf.d

# Copiar los archivos generados en la etapa de construcción al servidor Nginx
COPY --from=build /app/dist/portfolio_front /usr/share/nginx/html

# Exponer el puerto en el que se servirá la aplicación
EXPOSE 80

# Comando para ejecutar Nginx en el contenedor
CMD ["nginx", "-g", "daemon off;"]
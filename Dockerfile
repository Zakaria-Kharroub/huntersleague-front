# Étape 1 : Build Angular App
FROM node:18-alpine AS build-stage

WORKDIR /app

# Copier les fichiers nécessaires
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier le code source
COPY . .

# Construire l'application Angular (les fichiers seront générés dans dist/<nom-du-projet>)
RUN npm run build --output-path=dist

# Étape 2 : Servir avec NGINX
FROM nginx:stable-alpine AS productive-stage

# Copier les fichiers construits vers NGINX
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer NGINX
CMD ["nginx", "-g", "daemon off;"]

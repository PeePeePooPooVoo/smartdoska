# ========== Backend ==========
FROM node:20-alpine AS backend

WORKDIR /app

# Копируем корневой package.json и устанавливаем зависимости
COPY package.json ./
RUN npm install

# Копируем весь серверный код
COPY server/ ./server/

# Команда запуска backend
CMD ["node", "server/server.js"]

# ========== Frontend ==========
FROM nginx:alpine AS frontend

# Удаляем стандартный html
RUN rm -rf /usr/share/nginx/html/*

# Копируем фронтенд файлы
COPY public/ /usr/share/nginx/html/public/
COPY src/ /usr/share/nginx/html/src/

# Копируем Nginx конфиг
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
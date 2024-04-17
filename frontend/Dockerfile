# Используйте официальный образ Node.js для сборки приложения
FROM node:20.2.0

# Установите рабочий каталог в контейнере
WORKDIR /app

# Копируйте файлы package.json и package-lock.json
COPY package*.json ./

# Установите зависимости приложения
RUN npm install

# Копируйте исходный код приложения
COPY . .

# Соберите приложение
RUN npm run build

# Запускаем сервер
CMD ["npm", "run", "preview"]
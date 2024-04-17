# Используйте официальный образ Python для сборки приложения
FROM python:3.8

# Установите рабочий каталог в контейнере
WORKDIR /app

# Копируйте файлы requirements.txt
COPY requirements.txt ./

# Установите зависимости приложения
RUN pip install -r requirements.txt

# Копируйте исходный код приложения
COPY . .

# Запустите приложение
CMD ["flask", "run", "--host=0.0.0.0"]
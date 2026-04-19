# Используем официальный образ PHP с менеджером процессов FPM
FROM php:8.3-fpm

# Устанавливаем системные утилиты, необходимые для работы библиотек и Composer
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

# Устанавливаем расширения PHP, которые требуются для работы Laravel (БД, строки, кэш)
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Копируем исполняемый файл Composer из официального образа прямо в наш контейнер
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Указываем рабочую папку внутри контейнера
WORKDIR /var/www

# Копируем все файлы из папки backend в рабочую папку контейнера
COPY . .

# Создаем .env из примера
RUN cp .env.example.docker .env

# Создаем симлинк для хранилища
RUN php artisan storage:link

# Даем права пользователю www-data на папки, в которые Laravel пишет логи и кэш
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

# Запускаем PHP-FPM сервер
CMD ["php-fpm"]

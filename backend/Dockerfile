# Используем официальный образ PHP с менеджером процессов FPM
FROM php:8.3-fpm

# Устанавливаем системные утилиты + libicu-dev для расширения intl
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libicu-dev \
    zip \
    unzip

# Устанавливаем расширения PHP
RUN docker-php-ext-configure intl \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd intl

# Копируем Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

# Сначала копируем файлы зависимостей
COPY composer.json composer.lock ./

# Устанавливаем зависимости (без этого шага Laravel может ругаться на отсутствие библиотек)
RUN composer install --no-scripts --no-autoloader

# Копируем всё остальное
COPY . .

# Финальные штрихи
# 1. Проверяем наличие .env, если нет — копируем из примера
# 2. Оптимизируем автозагрузку и создаем линк
RUN sh -c '[ ! -f .env ] && cp .env.example.docker .env || echo ".env already exists"' && \
    composer dump-autoload --optimize && \
    chown -R www-data:www-data storage bootstrap/cache && \
    php artisan storage:link

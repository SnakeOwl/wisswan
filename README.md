# Описание

Код сайта wisswan.tech. Backend написан на [Laravel](https://laravel.com/). Frontend написан на [Laravel](https://nextjs.org/).

# Frontend (Next.js)

Весь фронтенд находится в папке **frontend**. Далее инструкции для фронта идут относительно этой папки.

## ESLint
Запуск eslint:
```bash
npx eslint .
```

## Тесты
Тесты находятся в __tests__. Запуск:
```bash
npm run test
```

# Установка
## Установка / Backend / Ручная
Создать базу и пользователя к ней. (на примере используется mysql)

Далее из папки backend:
- Создаём файл **.env** из файла **.env.example**
- Для связи с базой нужно в **.env** файле изменить нужные переменные:
```php
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=wisswan
DB_USERNAME=admin
DB_PASSWORD=admin
```

- Установить зависимости:
```bash
composer install
```

- Создать ссылку на storage:
```bash
php artisan storage:link
```

- Запустить миграции базы:
```bash
php artisan migrate
```

Запуск (будет запущен на localhost:8000):
```bash
php artisan serve
```

Если всё сделано верно, по этому адресу: [localhost:8000](http://localhost:8000/api/test), выведется сообщение о том, что API работает.

## Установка / Frontend / Ручная



Из папки frontend:
- Создаём файл **.env** из файла **.env.example**
- Устанавливаем зависимости:
```bash
- npm install
```

Запуск: 
```bash
npm run dev
```
Если всё хорошо, по этой ссылке можно увидеть сайт: [localhost:3020](http://localhost:3030/)

## Создание админа

~~TODO: прописать автоматизацию этого процесса с запросом на конкретный email~~
Пароли на сайте не используются. Поэтому просто сидер не пропишешь.
- Создать в базе нужного пользователя (Можно через форму логина на сайте)
  - Если был запрос из формы входа, то по умолчанию сгенерированное письмо можно будет посмотреть в файле лога: **backend/storage/logs** . Там должен быть код для вставки на второй этап формы логина.
- Дать ему 255 в поле access:
```sql
update users set access=255 where id=1;
```


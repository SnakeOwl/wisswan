# Описание

Код сайта wisswan.tech. Backend написан на [Laravel](https://laravel.com/). Frontend написан на [Laravel](https://nextjs.org/).

# Frontend (Next.js)

Весь фронтенд находится в папке `frontend`. Далее инструкции для фронта идут относительно этой папки.

## Логгирование

Логгирование осуществляется в консоль. Ищи либо в docker, либо в CLI.

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

# Важные команды
## Laravel passport
### Генерация ключей (JWT tokens), для шифрования
!!! ПРОВЕРЬ В `.env` ФАЙЛЕ, ТОКЕНЫ НА ПРОДЕ УЖЕ ИМЕЮТСЯ.
Но если нет, то после создания в `.env` файл их запиши:
```bash
php artisan passport:keys --force
```
Они лежат в `storage/`. *(путь может быть изменён)*

### Создание клиента
Нужно создать одного клиента для фронтенда и записать во `frontend/.env` файл доступы от созданного клиента (client_id, client_secret).
```bash
php artisan passport:client --password
```

Нужены гранды на email_code и refresh_token. (Пиши через sql запрос на апдейт: 
```sql
update oauth_clients set grant_types = '["password","refresh_token","email_code"]' where id = 'сида_айди';
```
)

# Установка

Если есть готовый дамп базы, кидать его в папку `init-db`

## Установка / Весь проект / Docker / !!DEV

Запускаем саму сборку по команде:
```bash
sudo docker compose -f docker-compose.dev.yml up -d --build
```

Если всё прошло Хорошо, frontend откроется по пути [localhost](http://localhost). Работу бекенда можно глянуть по пути [localhost/api/test](http://localhost/api/test)


## Установка / Весь проект / Docker / !!PROD

Запускаем саму сборку по команде:
```bash
sudo docker compose up -d --build
```

!!! ВАЖНО: в первый старт перегенерируй ключи через php-cli:
```bash
php artisan passport:keys --force
```
Если вообще без них, то `php artisan` вообще не работает. Ключи используются из файла `.env`.

Ещё создай клиента для доступов. [###Создание клиента]

### Запуск прода на localhost 
- Нужно в файле `docker-compose.yml` отключить использование 443 порта у nginx. И удалить путь в `volume` для SSL
- В файле конфига nginx `backend/docker/production/nginx.conf` пошаманить с комментами, чтобы через SSL не пытался работать. Там всё расписано.

### Проверки
Если всё прошло Хорошо, frontend откроется по пути [localhost](http://localhost). Работу бекенда можно глянуть по пути [localhost/api/test](http://localhost/api/test)


## Привязка Telegram бота

Нужно дать запрос (в браузере открой ссылку) на привязку вебхука и перепроверить .env файлы. 

Запрос такой:
```
https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://wisswan.tech/api/webhooks/telegram-input&secret_token=<SECRET>
```


## Установка / Backend / Ручная
Создать базу и пользователя к ней. (на примере используется mysql)

Далее из папки backend:
- Создаём файл **.env** из файла **.env.example**
- Для связи с базой нужно в **.env** файле изменить нужные переменные (прописать доступы от своей базы):
```
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

Если всё хорошо, по этой ссылке можно увидеть сайт: [localhost:3030](http://localhost:3030/)


# Развёртывание / Frontend / Ручная

1. Собираем проект в режиме standalone (с переменными окружения .env.example):
```bash
npm run build
```

2. Копируем public и статические файлы:
```bash
cp -r ./public ./.next/static ./.next/standalone/.next
```

3. Запускаем:
```bash
node ./.next/standalone/server.js
```

4. Проверяем (backend не критичен, просто данных не будет): [localhost:3000](http://localhost:3000/)


# Создание админа

~~TODO: прописать автоматизацию этого процесса с запросом на конкретный email~~

Пароли на сайте не используются. Поэтому просто сидер не пропишешь.
- Создать в базе нужного пользователя (Можно через форму логина на сайте)
  - Если был запрос из формы входа, то по умолчанию сгенерированное письмо можно будет посмотреть в файле лога: **backend/storage/logs** . Там должен быть код для вставки на второй этап формы логина.
- Дать ему 255 в поле access:
```sql
update users set access=255 where id=1;
```

# develoment branch

1. Move to directory
   cd .\lessons-marks\

2. Install dependencies
   npm ci

3. Copy .env file
   cp .env.example .env.development

4. Start docker container
   docker compose up -d

5. Start server
   npm run start:dev

---

Принятые решения:

1. Обработка ошибок в отдельных exception
2. На один email может регистрироваться один пользователь
3. У каждого урока уникальный code

Wip:

1. Миграции
2. Auth module

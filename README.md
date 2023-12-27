# develoment branch

1. Move to directory
   cd .\lessons-marks\

2. Install dependencies
   npm ci

3. Copy .env file
   cp .env.example .env.development

4. Start docker container
   docker compose up -d

5. Run migrations
   npm run migration:run

6. Start server
   npm run start:dev

---

Принятые решения:

1. Обработка ошибок в отдельных exception
2. На один email может регистрироваться один пользователь
3. У каждого урока уникальный code
4. Авторизированный пользователь является администратором (имеет доступ ко всем запросам)
5. Добавлены отдельные контроллеры с авторизацией
6. Добавлены миграции

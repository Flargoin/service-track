# Одностраничный проект

Сборка: **Vite**. Стили: **SCSS** + **PostCSS** (autoprefixer). Линтинг: **ESLint**. Pre-commit: **Husky** + **lint-staged**.

## Установка

```bash
npm install
```

## Скрипты

| Команда | Описание |
|--------|----------|
| `npm run dev` | Режим разработки (HMR) |
| `npm run build` | Продакшен-сборка в `dist/` |
| `npm run preview` | Просмотр продакшен-сборки |
| `npm run lint` | Проверка кода ESLint |
| `npm run lint:fix` | Исправление по правилам ESLint |

## Pre-commit

При коммите Husky запускает **lint-staged**: для всех staged `.js` файлов выполняется `eslint --fix`. Если ESLint сообщает об ошибках, коммит отменяется.

## Структура

- `index.html` — точка входа
- `src/main.js` — главный JS
- `src/styles/main.scss` — базовые стили
- `public/` — статика (копируется в корень сборки)

# ldftcer - Telegram Bot Developer Website

Современный персональный сайт для ldftcer, разработчика Telegram ботов из Еревана.

## 🚀 Особенности

- **Современный дизайн** с темной фиолетовой темой
- **Адаптивный интерфейс** для мобильных устройств и ПК
- **Русскоязычный интерфейс** - весь контент на русском языке
- **Анимации** с использованием Framer Motion
- **SEO оптимизация**
- **Быстрая загрузка** благодаря Next.js
- **Поддержка тёмной/светлой темы**

## 🛠 Технологии

- **Next.js 14** - React фреймворк
- **TypeScript** - типизированный JavaScript
- **Tailwind CSS** - утилитарный CSS фреймворк
- **Framer Motion** - анимации

- **Lucide React** - иконки

## 📱 Telegram Боты

1. **ClipSnap Bot** (@ClipSnapbot) - скачивание видео из TikTok и Instagram
2. **Melodyi Bot** (@melodyi_bot) - скачивание музыки из YouTube
3. **Casino BlackCat Bot** (@CasinoBlackCat_bot) - казино игры
4. **Stick BlackCat Bot** (@StickBlackCat_bot) - создание стикеров
5. **Mafia BlackCat Bot** (@Mafia_BlackCat_bot) - игра Мафия

## 🚀 Установка и запуск

### Локальная разработка

1. **Клонируйте репозиторий:**
```bash
git clone <repository-url>
cd website
```

2. **Установите зависимости:**
```bash
npm install
```

3. **Запустите сервер разработки:**
```bash
npm run dev
```

4. **Откройте браузер:**
```
http://localhost:3000
```

### Деплой на Vercel

1. **Подключите репозиторий к Vercel:**
   - Зайдите на [vercel.com](https://vercel.com)
   - Нажмите "New Project"
   - Подключите ваш GitHub/GitLab репозиторий

2. **Настройте переменные окружения (если нужно):**
   - В настройках проекта Vercel добавьте переменные окружения

3. **Деплой:**
   - Vercel автоматически определит Next.js проект
   - Нажмите "Deploy"

4. **Настройка домена:**
   - В настройках проекта добавьте ваш домен

## 📁 Структура проекта

```
website/
├── pages/                 # Next.js Pages Router
│   ├── _app.tsx          # Главный компонент приложения
│   ├── index.tsx         # Главная страница
│   ├── about.tsx         # Страница "Обо мне"
│   ├── bots.tsx          # Страница "Боты"
│   ├── contact.tsx       # Страница "Контакты"
│   └── 404.tsx           # Страница 404
├── components/            # React компоненты
│   ├── Navigation.tsx     # Навигация
│   ├── Hero.tsx          # Главная секция
│   ├── About.tsx         # Обо мне
│   ├── Bots.tsx          # Секция ботов
│   ├── Contact.tsx       # Контакты
│   ├── LanguageSwitcher.tsx # Переключатель языка
│   └── ThemeSwitcher.tsx # Переключатель темы
├── public/              # Статические файлы
│   └── QR/             # QR коды ботов
├── globals.css          # Глобальные стили
├── next.config.js       # Конфигурация Next.js
├── vercel.json          # Конфигурация Vercel
└── tailwind.config.js   # Конфигурация Tailwind
```



## 📞 Контакты

- **Telegram:** [@ldftcer](https://t.me/ldftcer)
- **Канал:** [@ishqantas](https://t.me/ishqantas)
- **TikTok:** [@ldftcer](https://www.tiktok.com/@ldftcer)
- **Instagram:** [@ldftcer](https://www.instagram.com/ldftcer/)

## 🎨 Дизайн

Сайт использует современный дизайн с:
- Темной фиолетовой цветовой схемой
- Стеклянными эффектами (glass morphism)
- Плавными анимациями
- Градиентными элементами
- Адаптивной типографикой
- Поддержкой тёмной/светлой темы

## 📦 Сборка для продакшена

```bash
npm run build
npm start
```

## 🔧 Конфигурация для Vercel

Проект настроен для работы на Vercel:

- **next.config.js** - конфигурация Next.js
- **vercel.json** - настройки деплоя и безопасности
- **package.json** - указана минимальная версия Node.js (18+)

## 🚀 Особенности для Vercel

- Автоматическое определение Next.js проекта
- Оптимизированные изображения
- CDN для статических файлов
- Автоматические деплои при push в main ветку
- SSL сертификаты
- Глобальная CDN сеть

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте ветку для новой функции (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add some amazing feature'`)
4. Отправьте в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

Этот проект лицензирован под MIT License.

## 🙏 Благодарности

- [Next.js](https://nextjs.org/) - за отличный фреймворк
- [Tailwind CSS](https://tailwindcss.com/) - за утилитарный CSS
- [Framer Motion](https://www.framer.com/motion/) - за анимации
- [Vercel](https://vercel.com/) - за хостинг и деплой 
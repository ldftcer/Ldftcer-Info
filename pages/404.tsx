import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4" style={{ color: 'rgb(var(--foreground-rgb))' }}>
          Страница не найдена
        </h2>
        <p className="text-lg mb-8 opacity-70" style={{ color: 'rgb(var(--foreground-rgb))' }}>
          Извините, запрашиваемая страница не существует.
        </p>
        <Link
          href="/"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover-glow transition-all duration-300"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
} 
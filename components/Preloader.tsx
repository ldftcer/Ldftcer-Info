import React from 'react'
import Image from 'next/image'

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black bg-opacity-90">
      <div className="animate-spin-slow mb-6">
        <Image src="/casino/casino.png" alt="Logo" width={80} height={80} priority />
      </div>
      <div className="text-2xl font-bold text-primary-400 animate-pulse">Загрузка...</div>
    </div>
  )
}

// Добавляю кастомную анимацию в tailwind.config.js:
// 'spin-slow': 'spin 2s linear infinite' 
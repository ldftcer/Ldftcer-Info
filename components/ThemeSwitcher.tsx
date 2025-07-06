'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    try {
      const saved = localStorage.getItem('theme')
      if (saved === 'light' || saved === 'dark') {
        setTheme(saved)
        if (saved === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      } else {
        // По умолчанию тёмная тема
        setTheme('dark')
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      }
    } catch (error) {
      console.error('Error loading theme:', error)
      // Fallback к тёмной теме
      setTheme('dark')
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    try {
      const newTheme = theme === 'dark' ? 'light' : 'dark'
      setTheme(newTheme)
      
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      
      localStorage.setItem('theme', newTheme)
    } catch (error) {
      console.error('Error saving theme:', error)
    }
  }

  // Не рендерим кнопку до монтирования, чтобы избежать гидратации
  if (!mounted || !theme) return null

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full glass-effect hover-glow transition-all duration-300"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      suppressHydrationWarning
    >
      {theme === 'dark' ? (
        <Sun className="w-6 h-6 text-yellow-400" />
      ) : (
        <Moon className="w-6 h-6 text-blue-400" />
      )}
    </button>
  )
} 
'use client'

import { useState } from 'react'
import { Globe, ChevronDown } from 'lucide-react'
import { useLanguage } from './ClientAppWrapper'

const languages = [
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hy', name: 'Հայերեն', flag: '🇦🇲' },
]

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const { lang, setLang } = useLanguage()

  const currentLanguage = languages.find(l => l.code === lang) || languages[0]

  const handleLanguageChange = (langCode: string) => {
    setIsOpen(false)
    setLang(langCode)
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 px-4 py-2 glass-effect rounded-lg hover-glow transition-all duration-200"
        >
          <Globe className="w-4 h-4 text-primary-400" />
          <span className="text-sm font-medium" style={{ color: 'rgb(var(--foreground-rgb))' }}>
            {currentLanguage.flag} {currentLanguage.name}
          </span>
          <ChevronDown className={`w-4 h-4 text-primary-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 glass-effect rounded-lg shadow-lg overflow-hidden">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-primary-600/20 transition-colors ${
                  language.code === lang ? 'bg-primary-600/30' : ''
                }`}
                style={{ 
                  color: language.code === lang ? 'rgb(192, 132, 252)' : 'rgb(var(--foreground-rgb))',
                  opacity: language.code === lang ? 1 : 0.7
                }}
              >
                <span className="text-lg">{language.flag}</span>
                <span className="text-sm font-medium">{language.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 
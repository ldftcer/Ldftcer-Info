'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import Preloader from './Preloader'
import ThemeSwitcher from './ThemeSwitcher'

const messages = {
  ru: require('../messages/ru.json'),
  en: require('../messages/en.json'),
  hy: require('../messages/hy.json'),
}

const defaultLang = 'ru'

const LanguageContext = createContext({
  lang: defaultLang,
  setLang: (lang: string) => {},
  t: (key: string) => key,
})

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState(defaultLang)
  const [dict, setDict] = useState(messages[defaultLang])

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('lang') : null
    if (stored && messages[stored as keyof typeof messages]) {
      setLang(stored)
      setDict(messages[stored as keyof typeof messages])
    }
  }, [])

  const changeLang = (newLang: string) => {
    if (messages[newLang as keyof typeof messages]) {
      setLang(newLang)
      setDict(messages[newLang as keyof typeof messages])
      if (typeof window !== 'undefined') localStorage.setItem('lang', newLang)
    }
  }

  const t = (key: string) => {
    return key.split('.').reduce((o, i) => (o ? o[i] : undefined), dict) || key
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default function ClientAppWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])
  if (loading) return <Preloader />
  return (
    <>
      <ThemeSwitcher />
      {children}
    </>
  )
} 
'use client'

import { useState } from 'react'
import { Menu, X, Bot, User, MessageCircle, Home } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from './ClientAppWrapper'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  const navItems = [
    { href: '/', label: t('navigation.home'), icon: Home },
    { href: '/about', label: t('navigation.about'), icon: User },
    { href: '/bots', label: t('navigation.bots'), icon: Bot },
    { href: '/contact', label: t('navigation.contact'), icon: MessageCircle },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">ldftcer</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-600 text-white'
                      : 'hover:text-white hover:bg-primary-600/20'
                  }`}
                  style={{ 
                    color: isActive ? 'white' : 'rgb(var(--foreground-rgb))',
                    opacity: isActive ? 1 : 0.7
                  }}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:text-white hover:bg-primary-600/20 transition-colors"
            style={{ color: 'rgb(var(--foreground-rgb))', opacity: 0.7 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-primary-600 text-white'
                        : 'hover:text-white hover:bg-primary-600/20'
                    }`}
                    style={{ 
                      color: isActive ? 'white' : 'rgb(var(--foreground-rgb))',
                      opacity: isActive ? 1 : 0.7
                    }}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 
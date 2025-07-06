'use client'

import { motion } from 'framer-motion'
import { Bot, Download, Play, Zap } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from './ClientAppWrapper'

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-20" style={{
        background: 'linear-gradient(to bottom right, rgb(168, 85, 247, 0.2), rgb(15, 23, 42), rgb(147, 51, 234, 0.2))'
      }} />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-400/5 rounded-full blur-3xl animate-pulse-slow delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
            >
              <span className="gradient-text">{t('hero.title')}</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto"
              style={{ color: 'rgb(var(--foreground-rgb))' }}
            >
              {t('hero.subtitle')}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg max-w-2xl mx-auto opacity-70"
              style={{ color: 'rgb(var(--foreground-rgb))' }}
            >
              {t('hero.description')}
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#bots"
              className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover-glow transition-all duration-300"
            >
              <Bot className="w-5 h-5" />
              <span>Мои боты</span>
            </a>
            
            <a
              href="https://t.me/ishqantas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-8 py-4 glass-effect text-white rounded-lg font-semibold hover-glow transition-all duration-300"
            >
              <Play className="w-5 h-5" />
              <span>Мой канал</span>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto pt-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">5</div>
              <div className="opacity-70" style={{ color: 'rgb(var(--foreground-rgb))' }}>{t('bots.created')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">1000+</div>
              <div className="opacity-70" style={{ color: 'rgb(var(--foreground-rgb))' }}>{t('bots.users')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">4</div>
              <div className="opacity-70" style={{ color: 'rgb(var(--foreground-rgb))' }}>{t('about.experience')}</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-primary-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
} 
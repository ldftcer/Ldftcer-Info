'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, User, Heart, Bot } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from './ClientAppWrapper'

export default function About() {
  const { t } = useLanguage()
  const stats = [
    { icon: User, value: '18', label: 'лет' },
    { icon: MapPin, value: 'Ереван', label: 'Местоположение' },
    { icon: Heart, value: '5', label: 'Ботов' },
    { icon: Calendar, value: '2024', label: 'Проектов' },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            {t('about.title')}
          </h2>
          <p className="text-xl max-w-3xl mx-auto opacity-70" style={{ color: 'rgb(var(--foreground-rgb))' }}>
            {t('about.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image and stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile image placeholder */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <User className="w-32 h-32 text-white" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                <Bot className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 glass-effect rounded-lg hover-glow"
                  >
                    <Icon className="w-8 h-8 text-primary-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-sm opacity-70" style={{ color: 'rgb(var(--foreground-rgb))' }}>{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold" style={{ color: 'rgb(var(--foreground-rgb))' }}>
                {t('about.name')} - {t('about.age')}
              </h3>
              <p className="text-lg leading-relaxed opacity-80" style={{ color: 'rgb(var(--foreground-rgb))' }}>
                {t('about.description')}
              </p>
            </div>

            {/* Skills/Interests */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold" style={{ color: 'rgb(var(--foreground-rgb))' }}>{t('about.interests')}</h4>
              <div className="flex flex-wrap gap-2">
                {['Telegram Bots', 'JavaScript', 'Python', 'UI/UX Design', 'Music', 'Gaming'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-primary-600/20 text-primary-300 rounded-full text-sm border border-primary-600/30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <a
                href="https://t.me/ishqantas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover-glow transition-all duration-300"
              >
                <Heart className="w-5 h-5" />
                <span>{t('about.subscribe')}</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
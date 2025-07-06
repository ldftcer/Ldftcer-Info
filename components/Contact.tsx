'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Instagram, ExternalLink, Mail, MapPin, Phone } from 'lucide-react'
import { useLanguage } from './ClientAppWrapper'

export default function Contact() {
  const { t } = useLanguage();
  const socialLinks = [
    {
      name: 'Telegram',
      username: '@ldftcer',
      url: 'https://t.me/ldftcer',
      icon: MessageCircle,
      color: 'from-blue-500 to-cyan-500',
      description: 'Напишите мне в Telegram'
    },
    {
      name: 'TikTok',
      username: '@ldftcer',
      url: 'https://www.tiktok.com/@ldftcer',
      icon: ExternalLink,
      color: 'from-pink-500 to-red-500',
      description: 'Следите за мной в TikTok'
    },
    {
      name: 'Instagram',
      username: '@ldftcer',
      url: 'https://www.instagram.com/ldftcer/',
      icon: Instagram,
      color: 'from-purple-500 to-pink-500',
      description: 'Подписывайтесь в Instagram'
    }
  ]

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Местоположение',
      value: 'Ереван, Армения',
      color: 'text-red-400'
    },
    {
      icon: MessageCircle,
      label: 'Telegram',
      value: '@ldftcer',
      color: 'text-blue-400'
    },
    {
      icon: ExternalLink,
      label: 'Канал',
      value: '@ishqantas',
      color: 'text-green-400'
    }
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl max-w-3xl mx-auto opacity-70" style={{ color: 'rgb(var(--foreground-rgb))' }}>
            Свяжитесь со мной через любую из социальных сетей или напишите в Telegram
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'rgb(var(--foreground-rgb))' }}>Контактная информация</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.color.replace('text-', 'from-').replace('-400', '-500')} to-${info.color.replace('text-', '').replace('-400', '-600')} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm opacity-70" style={{ color: 'rgb(var(--foreground-rgb))' }}>{info.label}</div>
                        <div className="font-medium" style={{ color: 'rgb(var(--foreground-rgb))' }}>{info.value}</div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* About me card */}
            <div className="glass-effect rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'rgb(var(--foreground-rgb))' }}>Обо мне</h3>
              <p className="leading-relaxed mb-4 opacity-80" style={{ color: 'rgb(var(--foreground-rgb))' }}>
                Я ldftcer, 18-летний разработчик из Еревана. Создаю инновационные Telegram боты и делюсь интересным контентом в социальных сетях.
              </p>
              <div className="flex items-center space-x-2 text-primary-400">
                <span className="text-sm">📍 Ереван, Армения</span>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6" style={{ color: 'rgb(var(--foreground-rgb))' }}>Социальные сети</h3>
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="block glass-effect rounded-xl p-6 hover-glow transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-1" style={{ color: 'rgb(var(--foreground-rgb))' }}>{social.name}</h4>
                      <p className="mb-2 opacity-70" style={{ color: 'rgb(var(--foreground-rgb))' }}>{social.description}</p>
                      <div className="text-primary-400 font-mono text-sm">{social.username}</div>
                    </div>
                    <ExternalLink className="w-5 h-5 opacity-70 group-hover:text-primary-400 transition-colors" style={{ color: 'rgb(var(--foreground-rgb))' }} />
                  </div>
                </motion.a>
              )
            })}
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'rgb(var(--foreground-rgb))' }}>Готов к сотрудничеству!</h3>
            <p className="mb-6 opacity-70" style={{ color: 'rgb(var(--foreground-rgb))' }}>
              Если у вас есть идеи для новых ботов или хотите обсудить проект, не стесняйтесь обращаться!
            </p>
            <a
              href="https://t.me/ldftcer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover-glow transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Написать в Telegram</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
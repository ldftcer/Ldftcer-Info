'use client'

import { motion } from 'framer-motion'
import { Bot, Download, Music, Gamepad2, Sticker, Users, ExternalLink, QrCode } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from './ClientAppWrapper'

export default function Bots() {
  const { t } = useLanguage()
  const bots = [
    {
      id: 'clipSnap',
      name: 'ClipSnap',
      description: 'Бот для быстрого скачивания видео из TikTok и Instagram с высоким качеством',
      features: ['Быстрое скачивание', 'Поддержка TikTok', 'Поддержка Instagram', 'Простой интерфейс'],
      icon: Download,
      color: 'from-blue-500 to-cyan-500',
      username: '@ClipSnapbot',
      qrCode: '/QR/ClipSnapQr.png',
      link: 'https://t.me/ClipSnapbot'
    },
    {
      id: 'melodyi',
      name: 'Melodyi',
      description: 'Музыкальный бот для поиска и скачивания песен с возможностью создания плейлистов',
      features: ['Inline режим', 'Создание плейлистов', 'Высокое качество', 'Быстрая загрузка'],
      icon: Music,
      color: 'from-green-500 to-emerald-500',
      username: '@melodyi_bot',
      qrCode: '/QR/MelodyiQr.png',
      link: 'https://t.me/melodyi_bot'
    },
    {
      id: 'casino',
      name: 'Casino BlackCat',
      description: 'Развлекательный казино бот с различными играми и бонусами',
      features: ['Различные игры', 'Бонусы', 'Турниры', 'Безопасность'],
      icon: Gamepad2,
      color: 'from-yellow-500 to-orange-500',
      username: '@CasinoBlackCat_bot',
      qrCode: '/QR/CasinoCat.png',
      link: 'https://t.me/CasinoBlackCat_bot'
    },
    {
      id: 'sticker',
      name: 'Sticker BlackCat',
      description: 'Бот для создания и управления стикерами с поддержкой нескольких языков',
      features: ['3 языка', 'Inline режим', 'Групповые чаты', 'Личные чаты'],
      icon: Sticker,
      color: 'from-purple-500 to-pink-500',
      username: '@StickBlackCat_bot',
      qrCode: '/QR/@StickBlackCat.png',
      link: 'https://t.me/StickBlackCat_bot'
    },
    {
      id: 'mafia',
      name: 'Mafia BlackCat',
      description: 'Интерактивная игра Мафия с множеством игроков и различных ролей',
      features: ['Множество игроков', 'Различные роли', 'Интерактивный геймплэй'],
      icon: Users,
      color: 'from-red-500 to-rose-500',
      username: '@Mafia_BlackCat_bot',
      qrCode: '/QR/MafQr.png',
      link: 'https://t.me/Mafia_BlackCat_bot'
    }
  ]

  const handleQrClick = (qrPath: string) => {
    try {
      window.open(qrPath, '_blank', 'noopener,noreferrer')
    } catch (error) {
      console.error('Error opening QR code:', error)
    }
  }

  return (
    <section id="bots" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            {t('bots.title')}
          </h2>
          <p className="text-xl max-w-3xl mx-auto opacity-70" style={{ color: 'rgb(var(--foreground-rgb))' }}>
            {t('bots.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bots.map((bot, index) => {
            const Icon = bot.icon
            return (
              <motion.div
                key={bot.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="glass-effect rounded-xl p-6 h-full hover-glow transition-all duration-300">
                  {/* Bot icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${bot.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Bot info */}
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'rgb(var(--foreground-rgb))' }}>{bot.name}</h3>
                  <p className="mb-4 leading-relaxed opacity-80" style={{ color: 'rgb(var(--foreground-rgb))' }}>{bot.description}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {bot.features.map((feature: string, featureIndex: number) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                        <span className="text-sm opacity-80" style={{ color: 'rgb(var(--foreground-rgb))' }}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Username */}
                  <div className="text-sm text-primary-400 font-mono mb-4">
                    {bot.username}
                  </div>

                  {/* Action buttons */}
                  <div className="flex space-x-3">
                    <a
                      href={bot.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg text-sm font-medium hover:from-primary-700 hover:to-primary-800 transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{t('bots.try')}</span>
                    </a>
                    
                    <button
                      onClick={() => handleQrClick(bot.qrCode)}
                      className="px-4 py-2 glass-effect text-primary-400 rounded-lg hover:bg-primary-600/20 transition-colors"
                      title={t('bots.scanQR')}
                    >
                      <QrCode className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Channel QR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block glass-effect rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'rgb(var(--foreground-rgb))' }}>{t('bots.channelTitle')}</h3>
            <p className="mb-6 opacity-70" style={{ color: 'rgb(var(--foreground-rgb))' }}>{t('bots.channelDescription')}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://t.me/ishqantas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover-glow transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5" />
                <span>@ishqantas</span>
              </a>
              <button
                onClick={() => handleQrClick('/QR/QrTgChanel.png')}
                className="flex items-center space-x-2 px-6 py-3 glass-effect rounded-lg font-semibold hover-glow transition-all duration-300"
                style={{ color: 'rgb(var(--foreground-rgb))' }}
              >
                <QrCode className="w-5 h-5" />
                <span>{t('bots.channelQR')}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
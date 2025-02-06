'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBitcoin, FaEthereum, FaRocket, FaTelegram } from 'react-icons/fa'
import { SiSolana } from 'react-icons/si'
import { HiLightningBolt } from 'react-icons/hi'
import { RiMenu4Line } from 'react-icons/ri'
import { IoClose } from 'react-icons/io5'
import Image from 'next/image'
import { BsTwitterX } from "react-icons/bs"
import { useTranslation } from '@/app/i18n/client'
import LanguageSwitcher from '../ui/LanguageSwitcher'

export default function Navbar({ lng }: { lng: string }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useTranslation(lng, 'common')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 关闭菜单当路由改变时
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '/donate', label: t('nav.donate') },
    { href: '/projects', label: t('nav.projects') },
    { href: '/contact', label: t('nav.contact') },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-6 left-0 right-0 z-50 h-[72px] flex items-center px-4"
    >
      <div className="max-w-7xl w-full mx-auto">
        <motion.div
          layout
          className={`rounded-2xl transition-all duration-500 relative ${
            isScrolled
              ? 'bg-gradient-to-r from-black/95 via-blue-950/95 to-black/95 backdrop-blur-md shadow-lg'
              : 'bg-gradient-to-r from-black/90 to-blue-950/90 backdrop-blur-md'
          }`}
        >
          {/* PC端语言切换器 */}
          <div className="absolute -right-14 top-2 hidden md:block">
            <LanguageSwitcher lng={lng} />
          </div>

          {/* 温暖的光晕边框效果 */}
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-rose-400/20 via-teal-400/20 to-blue-500/20 blur-sm" />
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-rose-300/10 via-amber-300/10 to-teal-300/10" />

          {/* 呼吸动画效果 */}
          <motion.div
            className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-rose-400/10 via-amber-200/10 to-teal-300/10 opacity-0"
            animate={{
              opacity: [0, 0.5, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* 内容容器 */}
          <div className="relative h-14 px-4 flex items-center justify-between bg-gradient-to-b from-transparent to-black/30 rounded-2xl">
            {/* 左侧 Logo */}
            <motion.div 
              className="flex items-center space-x-3 w-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div 
                className="relative w-10 h-10"
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, -5, 0],
                }}
                transition={{ 
                  scale: { type: "spring", stiffness: 400, damping: 17 },
                  rotate: { duration: 0.5, ease: "easeInOut" }
                }}
              >
                {/* Logo背景 */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.5), rgba(45, 212, 191, 0.5))',
                    filter: 'blur(8px)',
                  }}
                  animate={{
                    opacity: [0.5, 0.7, 0.5],
                    scale: [0.9, 1.1, 0.9],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Logo容器 */}
                <motion.div 
                  className="relative w-full h-full rounded-full overflow-hidden"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                >
                  <Image 
                    src="/head-logo.png" 
                    alt="SimAngel" 
                    width={40} 
                    height={40} 
                    className="w-full h-full object-cover"
                    priority
                  />
                </motion.div>
              </motion.div>
              <motion.div 
                className="flex flex-col"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="bg-gradient-to-r from-sky-400 via-purple-500 to-teal-400 bg-clip-text text-transparent font-bold text-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span>Sim</span><span>Angel</span>
                </motion.div>
                <div className="flex items-center space-x-1 text-xs text-gray-400">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <SiSolana className="text-[#14F195]" />
                  </motion.div>
                  <span>Web3 Charity</span>
                </div>
              </motion.div>
            </motion.div>

            {/* 中间导航链接 - 桌面端 */}
            <div className="hidden md:flex items-center justify-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={`/${lng}${item.href}`}
                  className="relative group"
                >
                  <div className="relative px-4 py-2">
                    <span className="relative z-10 text-gray-200 group-hover:text-white transition-colors">
                      {item.label}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-teal-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              ))}
            </div>

            {/* 右侧图标组 */}
            <div className="flex items-center gap-3 md:gap-6 w-[88px] justify-end">
              {/* 移动端语言切换器 */}
              <div className="block md:hidden">
                <LanguageSwitcher lng={lng} />
              </div>

              {/* 移动端菜单按钮 */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-1 text-white md:hidden"
              >
                {isMenuOpen ? (
                  <IoClose className="w-6 h-6" />
                ) : (
                  <RiMenu4Line className="w-6 h-6" />
                )}
              </button>

              {/* 社交媒体图标 */}
              <div className="hidden md:flex items-center gap-3">
                <motion.a
                  href="https://x.com/simanangels"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-white"
                >
                  <BsTwitterX className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="https://t.me/+Xxeq64h-z6diY2M1"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-white transition-colors"
                >
                  <FaTelegram className="w-5 h-5" />
                </motion.a>
              </div>

              {/* 加密货币图标组 */}
              <div className="hidden md:flex items-center space-x-3">
                <motion.div
                  whileHover={{ rotate: 180, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#F7931A]"
                >
                  <FaBitcoin className="w-5 h-5 drop-shadow-[0_0_3px_rgba(247,147,26,0.3)]" />
                </motion.div>

                {/* Solana 图标组 */}
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative"
                  >
                    {/* 速度线效果 */}
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-[#00FFA3]/0 via-[#00FFA3]/30 to-[#00FFA3]/0"
                      animate={{
                        x: [-20, 20],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />

                    {/* 主 Solana 图标 */}
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="relative z-10"
                    >
                      <SiSolana className="w-5 h-5 text-[#00FFA3] drop-shadow-[0_0_5px_rgba(0,255,163,0.5)]" />
                    </motion.div>

                    {/* 闪电效果 */}
                    <motion.div
                      className="absolute -right-2 -top-2"
                      animate={{
                        scale: [0.8, 1, 0.8],
                        opacity: [0.3, 0.8, 0.3]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <HiLightningBolt className="w-3 h-3 text-[#00FFA3]" />
                    </motion.div>

                    {/* 火箭效果 */}
                    <motion.div
                      className="absolute -left-2 -bottom-2"
                      animate={{
                        rotate: [0, 45],
                        scale: [0.8, 1, 0.8],
                        opacity: [0.3, 0.8, 0.3]
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <FaRocket className="w-3 h-3 text-[#00FFA3]" />
                    </motion.div>
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ rotate: 180, scale: 1.1 }}
                  animate={{
                    rotate: isScrolled ? 360 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-blue-400"
                >
                  <FaEthereum className="w-5 h-5 drop-shadow-[0_0_3px_rgba(59,130,246,0.3)]" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* 移动端菜单 */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 mt-2 bg-gradient-to-b from-black/95 to-blue-950/95 backdrop-blur-md rounded-xl overflow-hidden"
              >
                <div className="p-4 space-y-4">
                  {/* 导航链接 */}
                  <div className="space-y-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={`/${lng}${item.href}`}
                        className="block"
                      >
                        <motion.div
                          whileHover={{ x: 10 }}
                          className={`px-4 py-2 rounded-lg ${
                            pathname === item.href
                              ? 'bg-gradient-to-r from-blue-500/20 to-teal-400/10 text-blue-400'
                              : 'text-gray-300'
                          }`}
                        >
                          {item.label}
                        </motion.div>
                      </Link>
                    ))}
                  </div>

                  {/* 社交媒体链接 */}
                  <div className="flex items-center gap-4 px-4 py-2">
                    <motion.a
                      href="https://x.com/simanangels"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-white"
                    >
                      <BsTwitterX className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="https://t.me/+Xxeq64h-z6diY2M1"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-white"
                    >
                      <FaTelegram className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.nav>
  )
}

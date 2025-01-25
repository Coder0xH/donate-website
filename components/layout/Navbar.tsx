'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBitcoin, FaEthereum, FaRocket } from 'react-icons/fa'
import { SiSolana } from 'react-icons/si'
import { HiLightningBolt } from 'react-icons/hi'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/donate', label: 'Donate' },
    { href: '/projects', label: 'Projects' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-6 left-0 right-0 z-50 h-[72px] flex items-center px-4"
    >
      <div className="max-w-2xl w-full mx-auto">
        <motion.div
          layout
          className={`rounded-2xl transition-all duration-500 relative ${
            isScrolled
              ? 'bg-gradient-to-r from-black/95 via-blue-950/95 to-black/95 backdrop-blur-md shadow-lg'
              : 'bg-gradient-to-r from-black/90 to-blue-950/90 backdrop-blur-md'
          }`}
        >
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
            {/* 左侧 Solana 图标组 */}
            <div className="flex items-center space-x-2 w-[88px]">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative"
              >
                <SiSolana className="w-4 h-4 text-purple-400 drop-shadow-[0_0_3px_rgba(168,85,247,0.5)]" />
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0
                  }}
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative"
              >
                <SiSolana className="w-4 h-4 text-rose-400 drop-shadow-[0_0_3px_rgba(251,113,133,0.5)]" />
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.6
                  }}
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative"
              >
                <SiSolana className="w-4 h-4 text-amber-400 drop-shadow-[0_0_3px_rgba(251,191,36,0.5)]" />
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.2
                  }}
                />
              </motion.div>
            </div>
            
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative group"
                >
                  <div className="relative px-3 py-2">
                    <AnimatePresence mode="wait">
                      {pathname === item.href && (
                        <motion.div
                          layoutId="navbar-active"
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-teal-400/10"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ 
                            type: "spring",
                            stiffness: 300,
                            damping: 30
                          }}
                        />
                      )}
                    </AnimatePresence>
                    <motion.div 
                      layout
                      className={`relative z-10 text-sm font-medium transition-colors duration-300 ${
                        pathname === item.href
                          ? 'bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent drop-shadow-[0_0_3px_rgba(59,130,246,0.3)]'
                          : 'text-gray-300 group-hover:text-blue-400'
                      }`}
                    >
                      {item.label}
                    </motion.div>
                  </div>
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-3 w-[88px] justify-end">
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
        </motion.div>
      </div>
    </motion.nav>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FaReact, FaJava, FaBitcoin, FaEthereum } from 'react-icons/fa'
import { SiRust, SiSolana } from 'react-icons/si'

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
    // { href: '/projects', label: 'Projects' },
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
          className={`rounded-2xl transition-all duration-500 border border-blue-500/10 ${
            isScrolled
              ? 'bg-black/85 backdrop-blur-md shadow-lg shadow-blue-500/10'
              : 'bg-black/85 backdrop-blur-md'
          }`}
        >
          <div className="h-14 px-4 flex items-center justify-between">
            <div className="flex items-center space-x-3 w-[88px]">
              <motion.div 
                className="flex items-center space-x-2"
                animate={{ opacity: [0, 1], x: [-20, 0] }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
              >
                <motion.div
                  whileHover={{ rotate: 180, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaReact className="w-5 h-5 text-[#61DAFB]" />
                </motion.div>
                <motion.div
                  whileHover={{ rotate: 180, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaJava className="w-5 h-5 text-[#007396]" />
                </motion.div>
                <motion.div
                  whileHover={{ rotate: 180, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <SiRust className="w-5 h-5 text-[#DEA584]" />
                </motion.div>
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
                          className="absolute inset-0 rounded-xl bg-blue-500/10"
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
                          ? 'text-blue-400'
                          : 'text-gray-300 group-hover:text-blue-400'
                      }`}
                    >
                      {item.label}
                    </motion.div>
                  </div>
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
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
                <FaBitcoin className="w-5 h-5" />
              </motion.div>
              <motion.div
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="text-[#00FFA3]"
              >
                <SiSolana className="w-5 h-5" />
              </motion.div>
              <motion.div
                whileHover={{ rotate: 180, scale: 1.1 }}
                animate={{
                  rotate: isScrolled ? 360 : 0,
                }}
                transition={{ duration: 0.5 }}
                className="text-blue-400/70"
              >
                <FaEthereum className="w-5 h-5" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

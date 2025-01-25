'use client'
import { languages } from '@/app/i18n/settings'
import { PiGlobeStandDuotone } from "react-icons/pi"
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function LanguageSwitcher({ lng, className = "" }: { lng: string, className?: string }) {
  const [isHovered, setIsHovered] = useState(false)

  const handleLanguageChange = (targetLang: string) => {
    window.location.href = `/${targetLang}`
  }

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500/10 to-violet-500/10 backdrop-blur-md flex items-center justify-center cursor-pointer border border-indigo-500/20 relative group"
      >
        <PiGlobeStandDuotone className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
        
        {/* 光晕效果 */}
        <div className="absolute inset-0 rounded-full bg-indigo-400/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-10 right-0 bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 backdrop-blur-md rounded-xl p-1.5 min-w-[90px] border border-indigo-500/20 z-50"
          >
            <div className="flex flex-col gap-1">
              {languages.map((l) => (
                <button
                  key={l}
                  onClick={() => handleLanguageChange(l)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    l === lng 
                      ? 'bg-indigo-500/20 text-indigo-300' 
                      : 'hover:bg-indigo-500/10 text-gray-300 hover:text-indigo-300'
                  }`}
                >
                  {l === 'zh' ? '中文' : 'English'}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 
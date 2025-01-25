'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FloatingCrypto } from '@/app/_components/ui/FloatingCrypto';
import { cryptoIcons } from '@/app/_constants/icons';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-teal-400/10 to-transparent" />
        <div className="absolute h-full w-full bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => {
            const randomCrypto = cryptoIcons[Math.floor(Math.random() * cryptoIcons.length)];
            return (
              <div 
                key={i} 
                className="absolute" 
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: `scale(${0.5 + Math.random() * 1.5})`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              >
                <FloatingCrypto Icon={randomCrypto.icon} color={randomCrypto.color} />
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="inline-block">
            <motion.span 
              className="inline-block text-sm font-medium px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-teal-400/10 border border-blue-500/20 text-blue-400 animate-pulse"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Web3 捐赠公益平台
            </motion.span>
          </motion.div>
          
          <motion.h1 
            className="mt-6 text-6xl md:text-8xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="inline-block bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
            链上公益
            </span>
            <br />
            <span className="inline-block mt-2 text-zinc-300">
            透明追踪
            </span>
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-xl text-zinc-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            透明捐赠，区块链见证每份爱，通过区块链技术，让每一笔捐赠都清晰可见。目前已募集
            <span className="text-blue-400 font-semibold animate-pulse"> ￥2,100,000 </span>
            用于四川理塘希漫教育中心
          </motion.p>

          <motion.div
            className="mt-10 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link href="/donate">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all relative overflow-hidden"
              >
                <span className="relative z-10">立即捐赠</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </Link>
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-xl bg-zinc-900 text-zinc-300 font-semibold hover:bg-zinc-800 transition-all border border-zinc-800 hover:border-blue-500/50"
              >
                了解项目
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

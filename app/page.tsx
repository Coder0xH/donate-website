'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaEthereum, 
  FaBitcoin, 
  FaHeart,
  FaMonero,
  FaDollarSign
} from 'react-icons/fa';
import { 
  SiSolana, 
  SiDogecoin, 
  SiLitecoin, 
  SiChainlink, 
  SiBinance,
  SiCardano
} from 'react-icons/si';

const cryptoIcons = [
  { icon: FaEthereum, color: 'text-blue-500' },
  { icon: FaBitcoin, color: 'text-yellow-500' },
  { icon: SiSolana, color: 'text-purple-500' },
  { icon: SiDogecoin, color: 'text-yellow-400' },
  { icon: SiLitecoin, color: 'text-gray-400' },
  { icon: SiChainlink, color: 'text-blue-400' },
  { icon: SiBinance, color: 'text-yellow-300' },
  { icon: SiCardano, color: 'text-blue-300' },
  { icon: FaMonero, color: 'text-orange-500' },
];

const GradientCard = ({ children }: { children: React.ReactNode }) => (
  <div className="relative group">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-teal-400 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
    <div className="relative bg-black/90 rounded-xl p-6">
      {children}
    </div>
  </div>
);

const DecayCard = ({ title, value, icon: Icon }: { title: string; value: string; icon: any }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-900 to-black p-px before:pointer-events-none before:absolute before:-left-48 before:-top-48 before:z-30 before:h-96 before:w-96 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:bg-gradient-to-r before:from-blue-500/20 before:via-teal-400/20 before:to-transparent before:opacity-0 before:blur-xl before:transition-opacity before:duration-500 hover:before:opacity-100"
  >
    <div className="relative z-20 flex h-full flex-col bg-black p-6">
      <div className="flex items-center gap-4">
        <Icon className="h-8 w-8 text-blue-500 animate-pulse" />
        <h3 className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-2xl font-bold text-transparent">
          {value}
        </h3>
      </div>
      <p className="mt-2 text-sm text-zinc-400">{title}</p>
    </div>
  </motion.div>
);

const FloatingCrypto = ({ Icon, color }: { Icon: any; color: string }) => (
  <motion.div
    initial={{ y: 0, opacity: 0.5 }}
    animate={{ 
      y: -20,
      opacity: [0.5, 1, 0.5],
      scale: [1, 1.2, 1],
      rotate: [-10, 10]
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      times: [0, 0.5, 1]
    }}
    className="absolute"
  >
    <Icon className={`w-6 h-6 ${color} opacity-30`} />
  </motion.div>
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-teal-400/10 to-transparent" />
          <div className="absolute h-full w-full bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          {/* 添加漂浮的加密货币图标 */}
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
                Web3 公益创新平台
              </motion.span>
            </motion.div>
            
            <motion.h1 
              className="mt-6 text-6xl md:text-8xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="inline-block bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                透明公益
              </span>
              <br />
              <span className="inline-block mt-2 text-zinc-300">
                链上追踪
              </span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-xl text-zinc-400 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              通过区块链技术，让每一笔捐赠都清晰可见。目前已募集
              <span className="text-blue-400 font-semibold animate-pulse"> ￥2,100,000 </span>
              用于西藏教育事业
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

      {/* Stats Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <DecayCard
              title="受益学生"
              value="200+"
              icon={FaEthereum}
            />
            <DecayCard
              title="已建成小学"
              value="1所"
              icon={FaBitcoin}
            />
            <DecayCard
              title="区块链透明度"
              value="100%"
              icon={SiSolana}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-teal-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <GradientCard>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">区块链捐赠</h3>
              <p className="text-zinc-400">
                支持ETH、BTC、SOL等多链捐赠，智能合约确保资金流向完全透明，每一笔捐赠都可以在链上追踪。
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {['ETH', 'BTC', 'BNB', 'SOL'].map((chain) => (
                  <div
                    key={chain}
                    className="px-4 py-2 rounded-lg bg-zinc-900 text-zinc-400 text-center text-sm border border-zinc-800 hover:border-blue-500/50 transition-colors"
                  >
                    {chain}
                  </div>
                ))}
              </div>
            </GradientCard>

            <GradientCard>
              <h3 className="text-xl font-semibold text-teal-400 mb-4">实物捐赠</h3>
              <p className="text-zinc-400">
                接受教育设备、图书、文具等物品捐赠，所有捐赠物品都将用于改善西藏地区学校的教学条件。
              </p>
              <Link 
                href="/donate" 
                className="mt-6 inline-flex items-center text-blue-400 hover:text-blue-300 group"
              >
                查看捐赠指南
                <svg className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </GradientCard>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

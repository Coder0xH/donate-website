'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import NewsSection from './components/NewsSection';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-dark transition-colors">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-primary-400/20 dark:from-primary-600/10 dark:to-primary-400/10" />
          <div className="absolute inset-0 bg-hero-pattern opacity-30 dark:opacity-20" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
            >
              Web3 驱动公益创新
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              已募集 <span className="font-bold text-primary-500">￥2,100,000</span> 用于西藏教育事业
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/donate" 
                className="inline-block bg-gradient-to-r from-primary-500 to-primary-600 px-8 py-3 rounded-full text-lg font-semibold text-white hover:shadow-lg hover:shadow-primary-500/30 transition-all"
              >
                立即捐赠
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-dark-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {[
              { value: '200+', label: '受益学生', icon: '👥' },
              { value: '1', label: '已建成小学', icon: '🏫' },
              { value: '100%', label: '区块链透明度', icon: '🔗' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="bg-white dark:bg-dark-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-bold text-primary-500 mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-16 bg-white dark:bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            项目展示
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-white dark:bg-dark-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-dark-200">
                {/* 这里需要添加实际的学校照片 */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">西藏小学建设项目</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  通过社区的力量，我们成功建立了第一所现代化小学，为当地儿童提供优质教育资源。
                </p>
                <Link 
                  href="/projects" 
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  了解更多 →
                </Link>
              </div>
            </motion.div>
            <motion.div 
              className="bg-white dark:bg-dark-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">区块链捐赠</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  支持ETH、BTC、BNB等多链捐赠，智能合约确保资金流向完全透明，每一笔捐赠都可以在链上追踪。
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {['ETH', 'BTC', 'BNB', 'SOL'].map((chain) => (
                    <div key={chain} className="bg-gray-50 dark:bg-dark-200 rounded p-3 text-center text-gray-700 dark:text-gray-300">
                      {chain}
                    </div>
                  ))}
                </div>
                <Link 
                  href="/donate" 
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  立即捐赠 →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <NewsSection />
    </main>
  );
}

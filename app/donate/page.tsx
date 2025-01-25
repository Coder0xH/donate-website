'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBitcoin, FaEthereum, FaBook, FaLaptop, FaBoxOpen } from 'react-icons/fa';
import { SiSolana } from 'react-icons/si';
import { RiNftFill } from 'react-icons/ri';
import { IoSchoolOutline } from 'react-icons/io5';
import Link from 'next/link';

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast = ({ message, onClose }: ToastProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2"
  >
    <span>{message}</span>
    <button onClick={onClose} className="ml-2">✕</button>
  </motion.div>
);

const CopyButton = ({ address }: { address: string }) => {
  const [showToast, setShowToast] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  return (
    <>
      <motion.button 
        onClick={handleCopy}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-primary-500/30 transition-all flex items-center space-x-2"
      >
        <span>复制地址</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
        </svg>
      </motion.button>
      <AnimatePresence>
        {showToast && <Toast message="地址已复制到剪贴板" onClose={() => setShowToast(false)} />}
      </AnimatePresence>
    </>
  );
};

const chainIcons = {
  ethereum: <FaEthereum className="w-8 h-8 text-[#627EEA]" />,
  bitcoin: <FaBitcoin className="w-8 h-8 text-[#F7931A]" />,
  solana: <SiSolana className="w-8 h-8 text-[#00FFA3]" />,
  binance: <RiNftFill className="w-8 h-8 text-[#F0B90B]" />
};

const physicalDonations = [
  {
    id: 'books',
    title: '图书捐赠',
    icon: <FaBook className="w-8 h-8 text-blue-500" />,
    description: '需要各类教育类图书，特别是科学、数学和文学类书籍',
    requirements: ['适合6-15岁年龄段', '品相完好', '无污损']
  },
  {
    id: 'devices',
    title: '电子设备',
    icon: <FaLaptop className="w-8 h-8 text-gray-600" />,
    description: '平板电脑、笔记本电脑等教学设备',
    requirements: ['可正常使用', '配套充电器', '已清除个人数据']
  },
  {
    id: 'supplies',
    title: '学习用品',
    icon: <IoSchoolOutline className="w-8 h-8 text-yellow-500" />,
    description: '文具、书包、学习工具等',
    requirements: ['全新未拆封', '适合学生使用', '符合安全标准']
  }
];

export default function DonatePage() {
  const [showToast, setShowToast] = useState(false);
  const walletAddresses = {
    ethereum: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    bitcoin: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
    binance: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    solana: '5KKsRYtxKkGBxzVUk7H6vSB3rKJJJmxNqzx1E6Vf9Fh6'
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-teal-400/10 to-transparent" />
          <div className="absolute h-full w-full bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div className="inline-block mb-4">
              <motion.span 
                className="inline-block text-sm font-medium px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-teal-400/10 border border-blue-500/20 text-blue-400"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Web3 捐赠平台
              </motion.span>
            </motion.div>
            <motion.h1 
              className="text-6xl md:text-8xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="inline-block bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                链上公益
              </span>
              <br />
              <span className="inline-block mt-2 text-zinc-300">
                爱心永恒
              </span>
            </motion.h1>
          </motion.div>

          {/* Donation Methods */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Crypto Donations */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-teal-400 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-black/90 backdrop-blur-xl rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  加密货币捐赠
                </h2>
                <div className="space-y-6">
                  {Object.entries(walletAddresses).map(([chain, address]) => (
                    <motion.div
                      key={chain}
                      whileHover={{ y: -2 }}
                      className="relative group"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/50 to-teal-400/50 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur" />
                      <div className="relative bg-zinc-900/80 rounded-lg p-4">
                        <div className="flex items-center space-x-3 mb-2">
                          {chainIcons[chain as keyof typeof chainIcons]}
                          <h3 className="text-lg font-medium text-white capitalize">
                            {chain}
                          </h3>
                        </div>
                        <p className="font-mono text-sm text-zinc-400 break-all bg-black/50 p-3 rounded-lg">
                          {address}
                        </p>
                        <CopyButton address={address} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Physical Donations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500 to-orange-400 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-black/90 backdrop-blur-xl rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                  物品捐赠
                </h2>
                <div className="space-y-6">
                  {physicalDonations.map((item) => (
                    <motion.div
                      key={item.id}
                      whileHover={{ y: -2 }}
                      className="relative group"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500/50 to-orange-400/50 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur" />
                      <div className="relative bg-zinc-900/80 rounded-lg p-4">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">{item.icon}</div>
                          <div>
                            <h3 className="text-lg font-medium text-white mb-2">
                              {item.title}
                            </h3>
                            <p className="text-zinc-400 text-sm mb-3">
                              {item.description}
                            </p>
                            <div className="space-y-1">
                              {item.requirements.map((req, idx) => (
                                <div key={idx} className="flex items-center text-sm text-zinc-500">
                                  <span className="w-1.5 h-1.5 bg-rose-500 rounded-full mr-2"></span>
                                  {req}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  <motion.div 
                    whileHover={{ y: -2 }}
                    className="relative group mt-8"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500/50 to-orange-400/50 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur" />
                    <div className="relative bg-zinc-900/80 rounded-lg p-6">
                      <h3 className="text-lg font-medium text-white mb-2">
                        物品捐赠地址
                      </h3>
                      <p className="text-zinc-400 mb-4">
                        西藏自治区拉萨市城关区北京中路28号
                        <br />
                        希漫天使公益基金会
                        <br />
                        联系电话：+86 891-1234567
                      </p>
                      <p className="text-sm text-zinc-500">
                        工作时间：周一至周五 9:00-17:00
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Impact Section */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/impact" className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300">
              <span className="text-lg">了解我们的影响力</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

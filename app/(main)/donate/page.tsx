'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBitcoin, FaEthereum, FaBook, FaLaptop } from 'react-icons/fa';
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
    className="fixed bottom-4 right-4 bg-indigo-600/90 backdrop-blur-md text-white px-6 py-3 rounded-xl shadow-xl flex items-center space-x-2"
  >
    <span>{message}</span>
    <button onClick={onClose} className="ml-2 hover:text-indigo-200">✕</button>
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
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-4 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-6 py-2.5 rounded-xl shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 flex items-center justify-center space-x-2 group w-full"
      >
        <span>复制地址</span>
        <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    icon: <FaBook className="w-8 h-8 text-indigo-400" />,
    description: '需要各类教育类图书，特别是科学、数学和文学类书籍',
    requirements: ['适合6-15岁年龄段', '品相完好', '无污损']
  },
  {
    id: 'devices',
    title: '电子设备',
    icon: <FaLaptop className="w-8 h-8 text-violet-400" />,
    description: '平板电脑、笔记本电脑等教学设备',
    requirements: ['可正常使用', '配套充电器', '已清除个人数据']
  },
  {
    id: 'supplies',
    title: '学习用品',
    icon: <IoSchoolOutline className="w-8 h-8 text-fuchsia-400" />,
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
    <main className="min-h-screen bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent opacity-50" />
      
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="inline-block text-sm font-medium px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-violet-500/20 border border-indigo-500/30 text-indigo-400">
                Web3 捐赠平台
              </span>
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8">
              <span className="inline-block bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                链上公益
              </span>
              <br />
              <span className="inline-block mt-4 text-white/90">
                让爱心永恒
              </span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              通过区块链技术，让每一份善意都透明可追溯，共同构建更美好的未来
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Crypto Donations */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 p-[1px] rounded-2xl">
                <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                    链上捐赠
                  </h2>
                  <div className="space-y-6">
                    {Object.entries(walletAddresses).map(([chain, address]) => (
                      <motion.div
                        key={chain}
                        whileHover={{ y: -2 }}
                        className="group"
                      >
                        <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
                          <div className="flex items-center space-x-3 mb-3">
                            {chainIcons[chain as keyof typeof chainIcons]}
                            <h3 className="text-lg font-medium text-white capitalize">
                              {chain}
                            </h3>
                          </div>
                          <p className="font-mono text-sm text-white/60 break-all bg-black/40 p-4 rounded-lg">
                            {address}
                          </p>
                          <CopyButton address={address} />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Physical Donations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-gradient-to-br from-violet-500/10 via-fuchsia-500/10 to-indigo-500/10 p-[1px] rounded-2xl">
                <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                    实物捐赠
                  </h2>
                  <div className="space-y-6">
                    {physicalDonations.map((item) => (
                      <motion.div
                        key={item.id}
                        whileHover={{ y: -2 }}
                        className="group"
                      >
                        <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 p-3 rounded-lg bg-white/5">
                              {item.icon}
                            </div>
                            <div>
                              <h3 className="text-lg font-medium text-white mb-2">
                                {item.title}
                              </h3>
                              <p className="text-white/60 text-sm mb-4">
                                {item.description}
                              </p>
                              <div className="space-y-2">
                                {item.requirements.map((req, idx) => (
                                  <div key={idx} className="flex items-center text-sm text-white/40">
                                    <span className="w-1 h-1 bg-violet-400 rounded-full mr-2"></span>
                                    {req}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div 
                    whileHover={{ y: -2 }}
                    className="mt-8"
                  >
                    <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
                      <h3 className="text-lg font-medium text-white mb-3">
                        实物捐赠地址
                      </h3>
                      <p className="text-white/60 mb-4">
                        西藏自治区拉萨市城关区北京中路28号
                        <br />
                        希漫天使公益基金会
                        <br />
                        联系电话：+86 891-1234567
                      </p>
                      <p className="text-sm text-white/40">
                        工作时间：周一至周五 9:00-17:00
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              href="/impact" 
              className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors group"
            >
              <span className="text-lg">了解我们的影响力</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="group-hover:translate-x-1 transition-transform"
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
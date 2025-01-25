'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBitcoin, FaEthereum, FaBook, FaLaptop, FaBoxOpen } from 'react-icons/fa';
import { SiSolana } from 'react-icons/si';
import { RiNftFill } from 'react-icons/ri';
import { IoSchoolOutline } from 'react-icons/io5';

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
    <main className="flex min-h-screen flex-col bg-white dark:bg-dark">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-primary-400/5 dark:from-primary-600/10 dark:to-primary-400/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-400/20 via-transparent to-transparent opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
            >
              一起助力教育
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              您的每一份支持都将帮助西藏地区的孩子获得更好的教育机会
            </motion.p>
          </motion.div>

          {/* Donation Methods Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
            {/* Crypto Donations */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/50 dark:bg-dark-100/50 backdrop-blur-lg rounded-3xl p-8 shadow-xl"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <FaBoxOpen className="w-6 h-6 mr-2 text-primary-500" />
                加密货币捐赠
              </h2>
              <div className="space-y-4">
                {Object.entries(walletAddresses).map(([chain, address]) => (
                  <motion.div
                    key={chain}
                    whileHover={{ y: -2 }}
                    className="bg-white dark:bg-dark-200 rounded-xl p-4 shadow-sm"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      {chainIcons[chain as keyof typeof chainIcons]}
                      <h3 className="text-lg font-medium text-gray-800 dark:text-white capitalize">
                        {chain}
                      </h3>
                    </div>
                    <p className="font-mono text-sm text-gray-600 dark:text-gray-400 break-all bg-gray-50 dark:bg-dark-300 p-2 rounded-lg">
                      {address}
                    </p>
                    <CopyButton address={address} />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Physical Donations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/50 dark:bg-dark-100/50 backdrop-blur-lg rounded-3xl p-8 shadow-xl"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <FaBoxOpen className="w-6 h-6 mr-2 text-primary-500" />
                物品捐赠
              </h2>
              <div className="space-y-6">
                {physicalDonations.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ y: -2 }}
                    className="bg-white dark:bg-dark-200 rounded-xl p-6 shadow-sm"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">{item.icon}</div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                          {item.description}
                        </p>
                        <div className="space-y-1">
                          {item.requirements.map((req, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                              {req}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                <div className="mt-6 bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    物品捐赠地址
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    西藏自治区拉萨市城关区北京中路28号 希漫天使公益基金会
                    <br />
                    联系电话：+86 891-1234567
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    工作时间：周一至周五 9:00-17:00
                  </p>
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
            <div className="inline-flex items-center space-x-2 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
              <span className="text-lg">了解我们的影响力</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

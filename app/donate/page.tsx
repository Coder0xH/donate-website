'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { SiSolana } from 'react-icons/si';
import { RiNftFill } from 'react-icons/ri';
import Image from 'next/image';

const CopyButton = ({ address }: { address: string }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      alert('地址已复制到剪贴板');
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  return (
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
  );
};

const chainIcons = {
  ethereum: <FaEthereum className="w-8 h-8 text-[#627EEA]" />,
  bitcoin: <FaBitcoin className="w-8 h-8 text-[#F7931A]" />,
  solana: <SiSolana className="w-8 h-8 text-[#00FFA3]" />,
  binance: <RiNftFill className="w-8 h-8 text-[#F0B90B]" />
};

export default function DonatePage() {
  const walletAddresses = {
    ethereum: '0x...',  // 这里需要填入实际的钱包地址
    bitcoin: 'bc1...',
    binance: '0x...',
    solana: '...'
  };

  return (
    <div className="min-h-screen bg-white dark:bg-dark pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-primary-400/5 dark:from-primary-600/10 dark:to-primary-400/10" />
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
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
          >
            支持我们的事业
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            您的每一份捐赠都将用于帮助西藏地区的教育事业
            <br />
            目前已有超过<span className="font-bold text-primary-500">210万</span>人民币的捐赠投入使用
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {Object.entries(walletAddresses).map(([chain, address], index) => (
            <motion.div
              key={chain}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-dark-100 rounded-2xl shadow-lg dark:shadow-primary-500/5 p-6 hover:shadow-xl dark:hover:shadow-primary-500/10 transition-all border border-gray-100 dark:border-gray-800"
            >
              <div className="flex items-center space-x-4 mb-6">
                {chainIcons[chain as keyof typeof chainIcons]}
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white capitalize">
                  {chain} 钱包
                </h3>
              </div>
              <div className="bg-gray-50 dark:bg-dark-200 p-4 rounded-xl">
                <p className="font-mono text-sm break-all text-gray-600 dark:text-gray-400">{address}</p>
                <CopyButton address={address} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-600 dark:text-gray-400">
            所有捐赠都将用于教育事业，我们承诺100%透明化管理
          </p>
          <motion.button
            className="mt-8 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 flex items-center space-x-2 mx-auto"
            whileHover={{ x: 10 }}
          >
            <span>查看资金流向</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

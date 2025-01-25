'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaEthereum, 
  FaBitcoin, 
  FaHeart,
  FaMonero,
  FaDollarSign,
  FaRocket
} from 'react-icons/fa';
import { 
  SiSolana, 
  SiDogecoin, 
  SiLitecoin, 
  SiChainlink, 
  SiBinance,
  SiCardano
} from 'react-icons/si';
import Modal from './components/Modal';

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

const StatCard = ({ icon: Icon, value, title, color, details }: { 
  icon: any; 
  value: string; 
  title: string; 
  color: string;
  details: {
    title: string;
    items: Array<{
      date: string;
      amount: string;
      description: string;
      status: string;
    }>;
  };
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const startDate = "Jan 24, 8:00 PM";
  const endDate = "Feb 23, 8:00 PM";
  const participants = 722;

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(true)}
        className="relative group cursor-pointer"
      >
        {/* 外层光晕效果 */}
        <div className={`absolute -inset-0.5 opacity-75 group-hover:opacity-100 transition duration-500 rounded-2xl ${
          title.includes('捐赠') ? 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20' :
          title.includes('学生') ? 'bg-gradient-to-r from-green-500/20 via-teal-500/20 to-blue-500/20' :
          'bg-gradient-to-r from-orange-500/20 via-red-500/20 to-purple-500/20'
        } blur-lg`} />
        
        {/* 主内容区域 */}
        <div className="relative h-full bg-[#1C1C1C] backdrop-blur-xl rounded-2xl p-6 overflow-hidden border border-white/5">
          {/* 背景动画效果 */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <motion.div
            className="absolute -right-4 -bottom-4 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="relative flex flex-col items-center text-center">
            {/* Icon with gradient */}
            <div className={`w-12 h-12 mb-4 rounded-full flex items-center justify-center ${
              title.includes('捐赠') ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20' :
              title.includes('学生') ? 'bg-gradient-to-br from-green-500/20 to-blue-500/20' :
              'bg-gradient-to-br from-orange-500/20 to-red-500/20'
            }`}>
              {title.includes('捐赠') ? (
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <Icon className="w-6 h-6 text-white" />
              )}
            </div>

            {/* Value with animated gradient text */}
            <motion.div
              className="relative"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <h3 className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${
                title.includes('捐赠') ? 'from-blue-400 via-purple-400 to-pink-400' :
                title.includes('学生') ? 'from-green-400 via-teal-400 to-blue-400' :
                'from-orange-400 via-red-400 to-purple-400'
              }`}>
                {value}
              </h3>
            </motion.div>

            {/* Title with shimmer effect */}
            <div className="relative mt-2">
              <p className="text-white/60">{title}</p>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          </div>
        </div>
      </motion.div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={details.title}
        subtitle={`${startDate}–${endDate}`}
        participants={participants}
        endTime="04d 08h 44m 13s"
        color={color}
      >
        <div className="space-y-3">
          <div className="text-lg text-white/90 mb-2">Rewards</div>
          {details.items.map((item, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-xl rounded-2xl p-4 hover:bg-black/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/60 text-sm">{item.date}</span>
                <span className={`px-3 py-1 rounded-full text-xs ${
                  item.status === '已完成' ? 'bg-green-500/20 text-green-400' :
                  item.status === '进行中' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-gray-500/20 text-gray-400'
                }`}>
                  {item.status}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white font-medium text-xl">{item.amount}</span>
                <span className="text-white/50 text-sm">{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};

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
          {/* 实时捐赠统计 */}
          <div className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-8 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-teal-400/10 border border-blue-500/20"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400">实时捐赠追踪</span>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              icon={FaEthereum}
              value="￥2,100,000"
              title="累计捐赠金额"
              color="bg-blue-500"
              details={{
                title: "捐赠金额明细",
                items: [
                  {
                    date: "2024-01-20",
                    amount: "500,000 ￥",
                    description: "教学楼建设项目",
                    status: "已完成"
                  },
                  {
                    date: "2024-01-15",
                    amount: "300,000 ￥",
                    description: "图书馆设备采购",
                    status: "进行中"
                  },
                  {
                    date: "2024-01-10",
                    amount: "200,000 ￥",
                    description: "教师培训项目",
                    status: "已完成"
                  }
                ]
              }}
            />
            <StatCard
              icon={FaHeart}
              value="200+"
              title="受益学生"
              color="bg-rose-500"
              details={{
                title: "受益学生统计",
                items: [
                  {
                    date: "2024年第一季度",
                    amount: "80 名",
                    description: "小学部学生",
                    status: "已完成"
                  },
                  {
                    date: "2023年第四季度",
                    amount: "120 名",
                    description: "初中部学生",
                    status: "已完成"
                  },
                  {
                    date: "2023年第三季度",
                    amount: "50 名",
                    description: "高中部学生",
                    status: "进行中"
                  }
                ]
              }}
            />
            <StatCard
              icon={SiSolana}
              value="100%"
              title="捐赠执行率"
              color="bg-teal-500"
              details={{
                title: "捐赠执行情况",
                items: [
                  {
                    date: "2024-01-20",
                    amount: "100%",
                    description: "教育设备采购",
                    status: "已完成"
                  },
                  {
                    date: "2024-01-15",
                    amount: "100%",
                    description: "助学金发放",
                    status: "已完成"
                  },
                  {
                    date: "2024-01-10",
                    amount: "100%",
                    description: "教师培训",
                    status: "已完成"
                  }
                ]
              }}
            />
          </div>
        </div>
      </section>

      {/* 最新捐赠动态 */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-teal-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent inline-block">
              最新捐赠动态
            </h2>
            <p className="mt-4 text-zinc-400">实时展示最新的捐赠流向，确保每一笔捐赠都用于实处</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 捐赠追踪卡片 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-teal-400 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
              <div className="relative bg-black/90 rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center">
                      <SiSolana className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">SOL 捐赠</h3>
                      <p className="text-sm text-zinc-400">2分钟前</p>
                    </div>
                  </div>
                  <span className="text-teal-400 font-semibold">+2.5 SOL</span>
                </div>
                <div className="pl-13">
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-zinc-400">发送至</span>
                    <span className="font-mono text-blue-400">xb2...8f9d</span>
                    <motion.div
                      animate={{
                        x: [0, 20],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="text-teal-400"
                    >
                      <FaRocket className="w-4 h-4" />
                    </motion.div>
                    <span className="font-mono text-rose-400">xt9...2e4f</span>
                  </div>
                  <div className="mt-2 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-teal-400"
                    />
                  </div>
                  <p className="mt-2 text-sm text-green-400">✓ 已完成转账到西藏拉萨某某小学</p>
                </div>
              </div>
            </motion.div>

            {/* 项目进展卡片 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500 to-orange-400 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
              <div className="relative bg-black/90 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-rose-400 mb-4">最新项目进展</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center">
                      <FaHeart className="w-4 h-4 text-rose-400" />
                    </div>
                    <div>
                      <p className="text-white">完成拉萨某某小学教学楼建设</p>
                      <p className="text-sm text-zinc-400">2024年1月20日</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <FaHeart className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-white">采购100台笔记本电脑</p>
                      <p className="text-sm text-zinc-400">2024年1月15日</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center">
                      <FaHeart className="w-4 h-4 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-white">完成2024年第一季度教师培训</p>
                      <p className="text-sm text-zinc-400">2024年1月10日</p>
                    </div>
                  </div>
                </div>
                <Link 
                  href="/projects" 
                  className="mt-6 inline-flex items-center text-rose-400 hover:text-rose-300 group"
                >
                  查看更多进展
                  <svg className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent inline-block">
              为什么选择我们？
            </h2>
            <p className="mt-4 text-zinc-400">区块链技术保证捐赠全程透明，让爱心直达需要的地方</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <GradientCard>
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-teal-400/20 flex items-center justify-center mb-6">
                <SiSolana className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">极速到账</h3>
              <p className="text-zinc-400">
                基于 Solana 的高性能区块链，捐赠资金秒级到账，让帮助不再等待。
              </p>
            </GradientCard>

            <GradientCard>
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-rose-500/20 to-orange-400/20 flex items-center justify-center mb-6">
                <FaHeart className="w-6 h-6 text-rose-400" />
              </div>
              <h3 className="text-xl font-semibold text-rose-400 mb-4">全程追踪</h3>
              <p className="text-zinc-400">
                区块链技术确保每一笔捐赠都可追踪，资金流向清晰透明。
              </p>
            </GradientCard>

            <GradientCard>
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-400/20 flex items-center justify-center mb-6">
                <FaDollarSign className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-amber-400 mb-4">多链支持</h3>
              <p className="text-zinc-400">
                支持ETH、BTC、SOL等多链捐赠，让爱心不受限制。
              </p>
            </GradientCard>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

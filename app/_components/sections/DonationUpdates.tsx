'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SiSolana } from 'react-icons/si';
import { FaRocket, FaHeart } from 'react-icons/fa';
import { useState, useEffect } from 'react';

// 生成随机 SOL 地址
const generateRandomAddress = () => {
  const chars = '0123456789abcdef';
  return Array(4).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
};

// 生成随机 SOL 数量
const generateRandomAmount = () => {
  return (Math.random() * 5 + 0.1).toFixed(2);
};

// 生成随机时间（1-5分钟前）
const generateRandomTime = () => {
  return Math.floor(Math.random() * 5) + 1;
};

// 模拟捐赠数据类型
interface DonationData {
  amount: string;
  fromAddress: string;
  toAddress: string;
  timeAgo: number;
  recipient: string;
}

// 随机接收方学校列表
const RECIPIENTS = [
  '西藏拉萨某某小学',
  '青海玉树某某中学',
  '甘肃临夏某某小学',
  '云南怒江某某小学',
  '四川甘孜某某中学',
];

export default function DonationUpdates() {
  const [donation, setDonation] = useState<DonationData>({
    amount: '2.5',
    fromAddress: 'xb2...8f9d',
    toAddress: 'xt9...2e4f',
    timeAgo: 2,
    recipient: RECIPIENTS[0],
  });

  useEffect(() => {
    const updateDonation = () => {
      const newDonation: DonationData = {
        amount: generateRandomAmount(),
        fromAddress: `x${generateRandomAddress()}...${generateRandomAddress()}`,
        toAddress: `x${generateRandomAddress()}...${generateRandomAddress()}`,
        timeAgo: generateRandomTime(),
        recipient: RECIPIENTS[Math.floor(Math.random() * RECIPIENTS.length)],
      };
      setDonation(newDonation);
    };

    // 随机间隔（5-15秒）更新数据
    const getRandomInterval = () => (Math.random() * 10000 + 5000);
    
    const scheduleNextUpdate = () => {
      const interval = getRandomInterval();
      setTimeout(() => {
        updateDonation();
        scheduleNextUpdate();
      }, interval);
    };

    scheduleNextUpdate();
  }, []);

  return (
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
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-teal-400/20 flex items-center justify-center">
                    <SiSolana className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <Link href="/donate">
                      <button className="group relative inline-flex items-center justify-center px-6 py-2 font-semibold text-white transition-all duration-200 ease-in-out rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 hover:scale-105 active:scale-95">
                        <span className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-0 blur transition-all duration-200 group-hover:opacity-70 animate-pulse" />
                        <FaHeart className="w-4 h-4 mr-2 text-[red] animate-pulse" />
                        <span className='text-black'>我要捐赠</span>
                      </button>
                    </Link>
                  </div>
                </div>
                <span className="text-teal-400 font-semibold">+{donation.amount} SOL</span>
              </div>
              <div className="pl-13">
                <div className="flex items-center space-x-2 text-sm">
                  <span className="text-zinc-400">发送至</span>
                  <span className="font-mono text-blue-400">{donation.fromAddress}</span>
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
                  <span className="font-mono text-rose-400">CmE7...2YwM</span>
                </div>
                <div className="mt-2 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    key={donation.fromAddress}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-teal-400"
                  />
                </div>
                <p className="mt-2 text-sm text-green-400">✓ 正在进行转账到四川理塘希漫教育中心</p>
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
                    <p className="text-white">完成四川理塘希漫教育中心建设</p>
                    <p className="text-sm text-zinc-400">2024年1月20日</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <FaHeart className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-white">采购教学设备100多台</p>
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
  );
}

'use client';

import { motion } from 'framer-motion';
import { FaEthereum, FaHeart } from 'react-icons/fa';
import { SiSolana } from 'react-icons/si';
import StatCard from '@/app/_components/business/StatCard';

export default function StatsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
  );
}

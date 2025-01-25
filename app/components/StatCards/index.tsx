'use client';

import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { SiSolana } from 'react-icons/si';
import StatCard from './StatCard';

const statsData = [
  {
    icon: SiSolana,
    value: "￥2,100,000",
    title: "累计捐赠金额",
    color: "bg-blue-500",
    details: {
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
    }
  },
  {
    icon: FaHeart,
    value: "200+",
    title: "受益学生",
    color: "bg-rose-500",
    details: {
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
    }
  },
  {
    icon: SiSolana,
    value: "100%",
    title: "捐赠执行率",
    color: "bg-teal-500",
    details: {
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
    }
  }
];

const StatCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {statsData.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatCards;

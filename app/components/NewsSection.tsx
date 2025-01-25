'use client';

import { motion } from 'framer-motion';

const news = [
  {
    id: 1,
    title: '西藏小学建设项目完工',
    date: '2024-01-20',
    content: '经过社区的共同努力，我们的第一所小学已经顺利完工并投入使用...'
  },
  {
    id: 2,
    title: '新增以太坊2.0质押捐赠方式',
    date: '2024-01-15',
    content: '为了提供更多元化的捐赠方式，我们现已支持ETH2.0质押收益捐赠...'
  },
  {
    id: 3,
    title: '与Polygon基金会达成合作',
    date: '2024-01-10',
    content: 'Polygon基金会将为我们的项目提供技术支持，降低捐赠交易成本...'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function NewsSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          最新动态
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {news.map((newsItem) => (
            <motion.div
              key={newsItem.id}
              className="bg-white dark:bg-dark-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              variants={item}
            >
              <div className="p-6">
                <div className="text-sm text-primary-500 mb-2">{newsItem.date}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{newsItem.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{newsItem.content}</p>
                <motion.button
                  className="mt-4 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  whileHover={{ x: 5 }}
                >
                  阅读更多 →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

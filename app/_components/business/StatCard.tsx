'use client';

import React, { useState } from 'react';
import { StatCardProps } from './types';
import { motion } from 'framer-motion';
import Modal from '@/components/ui/Modal';
import { useTranslation } from '@/app/i18n/client';

const StatCard: React.FC<StatCardProps> = ({ 
  icon: Icon, 
  value, 
  title, 
  color, 
  details,
  endTime,
  lng
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation(lng, 'common');

  const getCardType = () => {
    if (title.includes(t('statCard.donation.title'))) return 'donation';
    if (title.includes(t('statCard.students.title'))) return 'students';
    return 'execution';
  };

  const cardType = getCardType();

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
          cardType === 'donation' ? 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20' :
          cardType === 'students' ? 'bg-gradient-to-r from-green-500/20 via-teal-500/20 to-blue-500/20' :
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
              cardType === 'donation' ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20' :
              cardType === 'students' ? 'bg-gradient-to-br from-green-500/20 to-blue-500/20' :
              'bg-gradient-to-br from-orange-500/20 to-red-500/20'
            }`}>
              {cardType === 'donation' ? (
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
                cardType === 'donation' ? 'from-blue-400 via-purple-400 to-pink-400' :
                cardType === 'students' ? 'from-green-400 via-teal-400 to-blue-400' :
                'from-orange-400 via-red-400 to-purple-400'
              }`}>
                {value}
              </h3>
            </motion.div>

            {/* Title with shimmer effect */}
            <div className="relative mt-2">
              <p className="text-white/60">{t(`statCard.${cardType}.title`)}</p>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          </div>
        </div>
      </motion.div>

      {details && (
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title={t(`statCard.${cardType}.details`)}
          color={color}
          endTime={endTime}
        >
          <div className="space-y-3">
            {details.items.map((item, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-xl rounded-2xl p-4 hover:bg-black/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/60 text-sm">{item.date}</span>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    item.status === t('status.completed') ? 'bg-green-500/20 text-green-400' :
                    item.status === t('status.inProgress') ? 'bg-blue-500/20 text-blue-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium text-xl">{item.amount}</span>
                  {item?.description && <span className="text-white/50 text-sm">{item.description}</span>}
                </div>
              </div>
            ))}
          </div>
        </Modal>
      )}
    </>
  );
};

export default StatCard;

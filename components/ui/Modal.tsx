'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  participants?: number;
  endTime?: string | null;
  children: React.ReactNode;
  color?: string;
}

const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  subtitle,
  participants,
  endTime,
  children,
  color = 'from-[#2D1B36]'
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
          />
          
          {/* 弹框容器 */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            {/* 弹框内容 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`relative w-full max-w-2xl p-8 rounded-3xl bg-gradient-to-br ${color} to-[#1A1A1A] shadow-2xl`}
            >
              {/* 头部区域 */}
              <div 
                className="p-6 pb-12 relative"
                style={{
                  background: 'linear-gradient(180deg, rgba(45, 27, 54, 0.95) 0%, rgba(45, 27, 54, 0.8) 100%)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                {/* 关闭按钮 */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                >
                  <IoClose className="w-6 h-6" />
                </button>

                {/* 标题区域 */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-[32px] font-bold text-white leading-tight">{title}</h3>
                  </div>
                  
                  {endTime && (
                    <div className="mt-6 space-y-1.5">
                      <div className="text-sm text-white/60">Ending in</div>
                      <div className="text-xl font-mono text-white tracking-wide bg-black/20 backdrop-blur-xl px-4 py-2 rounded-xl inline-block">{endTime}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* 内容区域 */}
              <div className="relative -mt-6">
                <div className="bg-[#171717] rounded-t-[20px] p-6">
                  <div className="max-h-[60vh] overflow-y-auto custom-scrollbar pr-2">
                    {children}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;

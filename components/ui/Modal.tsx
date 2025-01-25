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
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-2xl overflow-hidden rounded-[20px]"
              style={{
                background: 'rgba(23, 23, 23, 0.95)',
                backdropFilter: 'blur(20px)',
              }}
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
                    {subtitle && (
                      <div className="mt-3 flex items-center space-x-3 text-sm text-white/80">
                        <div className="flex items-center space-x-2">
                          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current opacity-60">
                            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm1-13h-2v6l5.25 3.15.75-1.23-4-2.37V7z"/>
                          </svg>
                          <span>{subtitle}</span>
                        </div>
                        {participants && (
                          <>
                            <span className="text-white/40">•</span>
                            <div className="flex items-center space-x-2">
                              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current opacity-60">
                                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18h14v-1.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05.02.01.03.03.04.04 1.14.83 1.93 1.94 1.93 3.41V18h6v-1.5c0-2.33-4.67-3.5-7-3.5z"/>
                              </svg>
                              <span>{participants} participants</span>
                            </div>
                          </>
                        )}
                      </div>
                    )}
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
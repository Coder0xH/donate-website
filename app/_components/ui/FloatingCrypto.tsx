'use client';

import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface FloatingCryptoProps {
  Icon: IconType;
  color: string;
}

export function FloatingCrypto({ Icon, color }: FloatingCryptoProps) {
  return (
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
}

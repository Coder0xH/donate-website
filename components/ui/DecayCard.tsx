'use client';

import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface DecayCardProps {
  title: string;
  value: string;
  icon: IconType;
}

export function DecayCard({ title, value, icon: Icon }: DecayCardProps) {
  return (
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
}

'use client';

import { motion } from 'framer-motion';
import { SiSolana } from 'react-icons/si';
import { FaHeart, FaDollarSign } from 'react-icons/fa';
import { GradientCard } from '@/components/ui/GradientCard';

export default function Features() {
  return (
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
  );
}

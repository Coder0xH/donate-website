'use client';

import { motion } from 'framer-motion';
import { SiSolana } from 'react-icons/si';
import { FaHeart, FaDollarSign } from 'react-icons/fa';
import { GradientCard } from '@/components/ui/GradientCard';
import { useTranslation } from '@/app/i18n/client';

export default function Features({ lng }: { lng: string }) {
  const { t } = useTranslation(lng, 'common');

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent inline-block">
            {t('features.title')}
          </h2>
          <p className="mt-4 text-zinc-400">{t('features.subtitle')}</p>
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
            <h3 className="text-xl font-semibold text-blue-400 mb-4">{t('features.instant.title')}</h3>
            <p className="text-zinc-400">
              {t('features.instant.description')}
            </p>
          </GradientCard>

          <GradientCard>
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-rose-500/20 to-orange-400/20 flex items-center justify-center mb-6">
              <FaHeart className="w-6 h-6 text-rose-400" />
            </div>
            <h3 className="text-xl font-semibold text-rose-400 mb-4">{t('features.tracking.title')}</h3>
            <p className="text-zinc-400">
              {t('features.tracking.description')}
            </p>
          </GradientCard>

          <GradientCard>
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-400/20 flex items-center justify-center mb-6">
              <FaDollarSign className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-semibold text-amber-400 mb-4">{t('features.multichain.title')}</h3>
            <p className="text-zinc-400">
              {t('features.multichain.description')}
            </p>
          </GradientCard>
        </motion.div>
      </div>
    </section>
  );
}

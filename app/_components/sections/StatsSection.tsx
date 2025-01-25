'use client';

import { motion } from 'framer-motion';
import { FaEthereum, FaHeart } from 'react-icons/fa';
import { SiSolana } from 'react-icons/si';
import StatCard from '@/app/_components/business/StatCard';
import { useTranslation } from '@/app/i18n/client';

export default function StatsSection({ lng }: { lng: string }) {
  const { t } = useTranslation(lng, 'common');

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
              <span className="text-green-400">{t('stats.title')}</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            icon={FaEthereum}
            value="￥5,000,000"
            title={t('stats.totalDonation.title')}
            color="bg-blue-500"
            endTime={t('stats.totalDonation.target')}
            lng={lng}
            details={{
              title: t('stats.totalDonation.details'),
              items: [
                {
                  date: "2024-01-20",
                  amount: "2,100,000 ￥",
                  description: t('stats.totalDonation.items.building'),
                  status: t('status.completed')
                },
                {
                  date: "2024-01-20 --- 2024-06-30",
                  amount: "2,900,000 ￥",
                  description: t('stats.totalDonation.items.library'),
                  status: t('status.inProgress')
                },
                {
                  date: "2024-01-20 --- 2024-06-30",
                  amount: "5,000 ￥",
                  description: t('stats.totalDonation.items.training'),
                  status: t('status.inProgress')
                }
              ]
            }}
          />
          <StatCard
            icon={FaHeart}
            value="200+"
            title={t('stats.beneficiaries.title')}
            color="bg-rose-500"
            endTime={t('stats.beneficiaries.target')}
            lng={lng}
            details={{
              title: t('stats.beneficiaries.details'),
              items: [
                {
                  date: t('stats.beneficiaries.quarters.q1_2024'),
                  amount: "15+ 名",
                  status: t('status.inProgress')
                },
                {
                  date: t('stats.beneficiaries.quarters.q4_2023'),
                  amount: "10 名",
                  status: t('status.completed')
                },
                {
                  date: t('stats.beneficiaries.quarters.q3_2023'),
                  amount: "5 名",
                  status: t('status.completed')
                }
              ]
            }}
          />
          <StatCard
            icon={SiSolana}
            value="100%"
            title={t('stats.executionRate.title')}
            color="bg-teal-500"
            endTime={null}
            lng={lng}
            details={{
              title: t('stats.executionRate.details'),
              items: [
                {
                  date: "2024-01-20",
                  amount: "100%",
                  description: t('stats.executionRate.items.building'),
                  status: t('status.completed')
                },
                {
                  date: "2024-01-15",
                  amount: "100%",
                  description: t('stats.executionRate.items.library'),
                  status: t('status.completed')
                },
                {
                  date: "2024-01-10",
                  amount: "100%",
                  description: t('stats.executionRate.items.training'),
                  status: t('status.completed')
                }
              ]
            }}
          />
        </div>
      </div>
    </section>
  );
}

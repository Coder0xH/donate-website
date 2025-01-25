'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBitcoin, FaEthereum, FaBook, FaLaptop, FaHeart } from 'react-icons/fa';
import { SiSolana } from 'react-icons/si';
import { RiNftFill } from 'react-icons/ri';
import { IoSchoolOutline } from 'react-icons/io5';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/app/i18n/client';

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast = ({ message, onClose }: ToastProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    className="fixed bottom-4 right-4 bg-indigo-600/90 backdrop-blur-md text-white px-6 py-3 rounded-xl shadow-xl flex items-center space-x-2"
  >
    <span>{message}</span>
    <button onClick={onClose} className="ml-2 hover:text-indigo-200">✕</button>
  </motion.div>
);

interface CopyButtonProps {
  address: string;
  lng: string;
}

const CopyButton = ({ address, lng }: CopyButtonProps) => {
  const [showToast, setShowToast] = useState(false);
  const { t } = useTranslation(lng, 'common');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <>
      <motion.button
        onClick={handleCopy}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-4 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-6 py-2.5 rounded-xl shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 flex items-center justify-center space-x-2 group w-full"
      >
        <span>{t('donate.copyButton')}</span>
        <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
        </svg>
      </motion.button>
      <AnimatePresence>
        {showToast && <Toast message={t('donate.copySuccess')} onClose={() => setShowToast(false)} />}
      </AnimatePresence>
    </>
  );
};

const chainIcons = {
  ETH: <FaEthereum className="w-8 h-8 text-[#627EEA]" />,
  BTC: <FaBitcoin className="w-8 h-8 text-[#F7931A]" />,
  SOL: <SiSolana className="w-8 h-8 text-[#00FFA3]" />,
  BNB: <RiNftFill className="w-8 h-8 text-[#F0B90B]" />,
  TRX: <Image src="/logos/trx.jpeg" alt="TRX" width={32} height={32} />
};

interface PhysicalDonationItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  requirements: string[];
}

export default function DonatePage({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = React.use(params);
  const { t } = useTranslation(lng, 'common');

  const walletAddresses = {
    ETH: '0x70315b79b8e6769c7208aab3031ccb364ea6b83d',
    BNB: '0x70315b79b8e6769c7208aab3031ccb364ea6b83d',
    SOL: 'CmE7JAWnwotBEvXSqRsJt2igeVQoXz3fkYjYu3cF2YwM',
    TRX: 'TU86v4cSKTdthB8GNz1rvv8iT6Y67xn1gX',
    BTC: 'bc1p3hcn7snsfpt80g5n3y6q4zsmqq3axyqswvutmmmc32rqpq4pnf5q2z4mxa',
  };

  const physicalDonations: PhysicalDonationItem[] = [
    {
      id: 'books',
      title: t('donate.sections.physical.items.books.title'),
      icon: <FaBook className="w-8 h-8 text-indigo-400" />,
      description: t('donate.sections.physical.items.books.description'),
      requirements: (t('donate.sections.physical.items.books.requirements', { returnObjects: true }) || []) as string[]
    },
    {
      id: 'devices',
      title: t('donate.sections.physical.items.devices.title'),
      icon: <FaLaptop className="w-8 h-8 text-violet-400" />,
      description: t('donate.sections.physical.items.devices.description'),
      requirements: (t('donate.sections.physical.items.devices.requirements', { returnObjects: true }) || []) as string[]
    },
    {
      id: 'supplies',
      title: t('donate.sections.physical.items.supplies.title'),
      icon: <IoSchoolOutline className="w-8 h-8 text-fuchsia-400" />,
      description: t('donate.sections.physical.items.supplies.description'),
      requirements: (t('donate.sections.physical.items.supplies.requirements', { returnObjects: true }) || []) as string[]
    },
    {
      id: 'simanangels',
      title: t('donate.sections.physical.items.simanangels.title'),
      icon: <FaHeart className="w-8 h-8 text-pink-400" />,
      description: t('donate.sections.physical.items.simanangels.description'),
      requirements: (t('donate.sections.physical.items.simanangels.requirements', { returnObjects: true }) || []) as string[]
    },
  ];
  return (
    <main className="min-h-screen bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent opacity-50" />

      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="inline-block text-sm font-medium px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-violet-500/20 border border-indigo-500/30 text-indigo-400">
                {t('donate.platform')}
              </span>
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8">
              <span className="inline-block bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                {t('donate.title.main')}
              </span>
              <br />
              <span className="inline-block mt-4 text-white/90">
                {t('donate.title.sub')}
              </span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              {t('donate.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Crypto Donations */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 p-[1px] rounded-2xl">
                <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                    {t('donate.sections.crypto.title')}
                  </h2>
                  <div className="space-y-6">
                    {Object.entries(walletAddresses).map(([chain, address]) => (
                      <motion.div
                        key={chain}
                        whileHover={{ y: -2 }}
                        className="group"
                      >
                        <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
                          <div className="flex items-center space-x-3 mb-3">
                            {chainIcons[chain as keyof typeof chainIcons]}
                            <h3 className="text-lg font-medium text-white capitalize">
                              {chain}
                            </h3>
                          </div>
                          <p className="font-mono text-sm text-white/60 break-all bg-black/40 p-4 rounded-lg">
                            {address}
                          </p>
                          <CopyButton address={address} lng={lng} />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Physical Donations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-gradient-to-br from-violet-500/10 via-fuchsia-500/10 to-indigo-500/10 p-[1px] rounded-2xl">
                <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                    {t('donate.sections.physical.title')}
                  </h2>
                  <div className="space-y-6">
                    {physicalDonations.map((item) => {
                      console.log({item:item.requirements});
                      return  <motion.div
                      key={item.id}
                      whileHover={{ y: -2 }}
                      className="group"
                    >
                      <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 p-3 rounded-lg bg-white/5">
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-medium text-white mb-2">
                              {item.title}
                            </h3>
                            <p className="text-white/60 text-sm mb-4">
                              {item.description}
                            </p>
                            <div className="space-y-2">
                              {item.requirements?.map((req, idx) => (
                                <div key={idx} className="flex items-center text-sm text-white/40">
                                  <span className="w-1 h-1 bg-violet-400 rounded-full mr-2"></span>
                                  {req}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    })}
                  </div>

                  <motion.div
                    whileHover={{ y: -2 }}
                    className="mt-8"
                  >
                    <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
                      <h3 className="text-lg font-medium text-white mb-3">
                        {t('donate.sections.physical.address.title')}
                      </h3>
                      <p className="text-white/60 mb-4">
                        {t('donate.sections.physical.address.content')}
                        <br />
                        {t('donate.sections.physical.address.contact.name')}
                        <br />
                        {t('donate.sections.physical.address.contact.phone')}
                      </p>
                      <p className="text-sm text-white/40">
                        {t('donate.sections.physical.address.workingHours')}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href={t('donate.learnMore.link')}
              className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors group"
            >
              <span className="text-lg">{t('donate.learnMore.text')}</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="group-hover:translate-x-1 transition-transform"
              >
                →
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

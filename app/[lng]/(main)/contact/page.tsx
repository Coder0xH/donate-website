'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/app/i18n/client';
import { FaEthereum, FaEnvelope, FaCopy } from 'react-icons/fa';
import { SiSolana } from 'react-icons/si';

interface FormItem {
  label: string;
  required: boolean;
  placeholder?: string;
  options?: string[];
}

interface TemplateSection {
  title: string;
  items: FormItem[];
}

type PageProps = {
  params: {
    lng: string;
  };
};

const ContactPage = ({ params: { lng } }: PageProps) => {
  const { t } = useTranslation(lng, 'common');
  const email = 'simandao@outlook.com';
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const templateItems: TemplateSection[] = [
    {
      title: t('volunteer.form.personalInfo.title'),
      items: [
        { label: t('volunteer.form.personalInfo.name'), required: true },
        { label: t('volunteer.form.personalInfo.gender.label'), required: true },
        { label: t('volunteer.form.personalInfo.age'), required: true },
        { label: t('volunteer.form.personalInfo.phone'), required: true },
        { label: t('volunteer.form.personalInfo.email'), required: true },
        { label: t('volunteer.form.personalInfo.address'), required: false }
      ]
    },
    {
      title: t('volunteer.form.donation.title'),
      items: [
        { 
          label: t('volunteer.form.donation.organization.label'), 
          placeholder: t('volunteer.form.donation.organization.placeholder'),
          required: true 
        },
        { 
          label: t('volunteer.form.donation.amount.label'), 
          placeholder: t('volunteer.form.donation.amount.placeholder'),
          required: true 
        },
        { 
          label: t('volunteer.form.donation.date.label'), 
          placeholder: t('volunteer.form.donation.date.placeholder'),
          required: true 
        },
        { 
          label: t('volunteer.form.donation.method.label'), 
          options: [
            t('volunteer.form.donation.method.options.cash'),
            t('volunteer.form.donation.method.options.crypto'),
            t('volunteer.form.donation.method.options.goods'),
            t('volunteer.form.donation.method.options.service'),
            t('volunteer.form.donation.method.options.other')
          ],
          required: true 
        },
        { 
          label: t('volunteer.form.donation.purpose.label'), 
          placeholder: t('volunteer.form.donation.purpose.placeholder'),
          required: true 
        }
      ]
    },
    {
      title: t('volunteer.form.intention.title'),
      items: [
        { label: t('volunteer.form.intention.position.label'), required: true },
        { label: t('volunteer.form.intention.duration.label'), required: true },
        { label: t('volunteer.form.intention.availability.weekday'), required: true },
        { label: t('volunteer.form.intention.availability.weekend'), required: false }
      ]
    },
    {
      title: t('volunteer.form.experience.title'),
      items: [
        { label: t('volunteer.form.experience.skills'), required: false },
        { label: t('volunteer.form.experience.hasExperience'), required: true }
      ]
    },
    {
      title: t('volunteer.form.emergency.title'),
      items: [
        { label: t('volunteer.form.emergency.name'), required: true },
        { label: t('volunteer.form.emergency.phone'), required: true }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent mb-4">
            {t('volunteer.title')}
          </h1>
          <p className="text-gray-400 mb-8">{t('volunteer.subtitle')}</p>
          <div className="flex justify-center space-x-4 mb-8">
            <FaEthereum className="text-4xl text-blue-500 animate-pulse" />
            <SiSolana className="text-4xl text-[#14F195] animate-pulse" />
          </div>

          {/* Email Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-teal-500/10 p-8 rounded-2xl border border-gray-800 backdrop-blur-lg mb-12"
          >
            <div className="flex flex-col items-center space-y-4">
              <FaEnvelope className="text-5xl text-blue-400" />
              <p className="text-gray-300">{t('volunteer.emailInstructions')}</p>
              <div className="flex items-center space-x-3 bg-black/30 px-6 py-3 rounded-lg">
                <span className="text-xl text-blue-400 font-mono">{email}</span>
                <button
                  onClick={copyEmail}
                  className="text-gray-400 hover:text-blue-400 transition-colors relative group"
                >
                  <FaCopy className="text-xl" />
                  {copied && (
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs py-1 px-2 rounded">
                      {t('volunteer.emailCopied')}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Template Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-left bg-white/5 p-8 rounded-2xl border border-gray-800 backdrop-blur-lg"
          >
            <h2 className="text-2xl font-semibold text-blue-400 mb-8">{t('volunteer.template.title')}</h2>
            <div className="space-y-8">
              {templateItems.map((section, index) => (
                <div key={index} className="border-t border-gray-800 pt-6 first:border-0 first:pt-0">
                  <h3 className="text-xl font-medium text-purple-400 mb-4">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                        <div className="flex-1">
                          <div className="flex items-center">
                            {item.label}
                            {item.required && (
                              <span className="ml-2 text-sm text-rose-500">{t('volunteer.form.required')}</span>
                            )}
                          </div>
                          {item.placeholder && (
                            <div className="mt-1 text-sm text-gray-500 italic">
                              {item.placeholder}
                            </div>
                          )}
                          {item.options && (
                            <div className="mt-2 ml-4 text-sm text-gray-400">
                              {item.options.map((option, optionIndex) => (
                                <div key={optionIndex} className="flex items-center space-x-2">
                                  <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                                  <span>{option}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}

export default ContactPage;

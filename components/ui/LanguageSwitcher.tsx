'use client'

import { useTranslation } from '@/app/i18n/client'
import { languages } from '@/app/i18n/settings'
import Link from 'next/link'

export default function LanguageSwitcher({ lng }: { lng: string }) {
  const { t } = useTranslation(lng)

  return (
    <div className="flex gap-2">
      {languages.map((l) => (
        <Link
          key={l}
          href={`/${l}`}
          className={`px-3 py-1 rounded ${
            l === lng 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  )
} 
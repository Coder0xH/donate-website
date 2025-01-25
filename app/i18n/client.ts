'use client'

import { useEffect } from 'react'
import i18next from 'i18next'
import { initReactI18next, useTranslation as useTranslationOrg, UseTranslationOptions } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { getOptions } from './settings'

i18next
  .use(initReactI18next)
  .use(resourcesToBackend((language: string, namespace: string) => 
    import(`./locales/${language}/${namespace}.json`)))
  .init(getOptions())

 
export function useTranslation(lng: string, ns?: string, options: UseTranslationOptions<undefined> = {}) {
  const ret = useTranslationOrg(ns, options)
  const { i18n } = ret

  useEffect(() => {
    if (i18n.resolvedLanguage === lng) return
    i18n.changeLanguage(lng).catch(() => {})
  }, [lng, i18n])

  // 强制重新渲染以确保语言切换立即生效
  useEffect(() => {
    if (i18n.resolvedLanguage !== lng) {
      i18n.reloadResources(lng, ns).catch(() => {})
    }
  }, [lng, ns, i18n])

  return ret
} 
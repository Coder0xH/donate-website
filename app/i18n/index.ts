import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next'
import { getOptions } from './settings'

export default async function initI18next(lng: string, ns: string) {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: string, namespace: string) => 
      import(`./locales/${language}/${namespace}.json`)))
    .init(getOptions(lng, ns))

  return i18nInstance
} 
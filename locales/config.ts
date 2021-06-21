import i18n from 'i18next'
import commonRU from './ru/common.json'
import commonUK from './uk/common.json'
import commonEN from './en/common.json'
import { initReactI18next } from 'react-i18next'

export const defaultNS = 'common'
export const resources = {
  ru: {
    common: commonRU,
  },
  uk: {
    common: commonUK,
  },
  en: {
    common: commonEN,
  },
} as const
export const locales = Object.keys(resources)

i18n.use(initReactI18next).init({
  ns: ['common'],
  defaultNS,
  resources,
})

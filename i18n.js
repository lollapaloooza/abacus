import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationRU from 'public/locales/ru/common.json'
import detector from 'i18next-browser-languagedetector'

const resources = {
  ru: {
    translation: translationRU,
  },
}

i18n
  // .use(detector)
  .use(initReactI18next)
  .init({
    resources: resources,
    fallbackLng: 'ru',
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n

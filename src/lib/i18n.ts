// i18n.js - FIXED for GitHub Pages
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    
    backend: {
      // Use relative path instead of absolute path
      loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/{{ns}}.json`,
      // Add request options for better error handling
      requestOptions: {
        mode: 'cors',
        credentials: 'same-origin',
        cache: 'default',
      },
    },

    load: 'languageOnly', 

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    
    ns: [
      'about', 'awesomegames', 'casestudy', 'contact', 'footer',
      'hero', 'home', 'hybrascollab', 'index', 'myholybooks', 'navigation',
      'p3mplatform', 'photox', 'portfolio', 'routejudge', 'visabuddy'
    ],
    defaultNS: 'hero',
    
    interpolation: {
      escapeValue: false,
    },
    
    react: {
      useSuspense: false,
    },
  });

// Preload important namespaces
i18n.loadNamespaces(['routejudge', 'visabuddy','myholybooks', 'photox', 'hybrascollab', 'p3mplatform', 'awesomegames']);

export default i18n;
import React, { useState, createContext } from 'react'
import { languageOptions, dictionaryList } from '../Languages/language'



// create the language context with default selected language
const defaultContext = {
  language: 'ru',
  dictionary: dictionaryList.ru,
  languageFlag: languageOptions.ru,
  languageChange: (selected, flag) => { }
}

export const LanguageContext = createContext(defaultContext)

// it provides the language context to app


export const LanguageProvider = React.memo(({ children }) => {

  const defaultLanguage = window.sessionStorage.getItem('lang')
  const defaultLanguageFlag = window.sessionStorage.getItem('flag')
  const [language, setLanguage] = useState(defaultLanguage || 'ru')
  const [languageFlag, setLanguageFlag] = useState(defaultLanguageFlag || languageOptions.ru)

  const provider = {
    language: 'ru',
    languageFlag: languageFlag,
    dictionary: dictionaryList[language],
    languageChange: (selected, flag) => {
      const newLanguage = languageOptions[selected] ? selected : 'ru'
      setLanguage(newLanguage);
      window.sessionStorage.setItem('lang', newLanguage)
      window.sessionStorage.setItem('flag', flag)
      setLanguageFlag(flag)
    }
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  )
})


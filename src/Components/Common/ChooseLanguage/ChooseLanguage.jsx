import React, { Fragment, useContext, useState } from 'react'
import { motion } from 'framer-motion'
import style from './ChooseLanguage.module.css'
import { LanguageContext } from '../LanguageProvider/LanguageProvider'
import { languageOptions } from '../Languages/language'


const activeChooseLanguage = {
  initial: {
    opacity: 0,
    height: '0px'
  },
  animate: {
    opacity: 1,
    height: '120px',
  },
  exit: {
    opacity: 0,
    height: '0px',
  },
}

const noActiveChooseLanguage = {
  initial: {
    opacity: 0,
    height: '0px'
  },
  animate: {
    opacity: 1,
    height: '0px',
  },
}

const activeFlag = {
  initial: {
    scale: 0,
    opacity: 0,
  },

  animate: (custom) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: custom * .3,
    },
  }),
}

const noActiveFlag = {
  initial: {
    scale: 0,
    opacity: 0,
  },

  animate: (custom) => ({
    scale: 0,
    opacity: 0,
  }),
}


export const ChooseLanguage = React.memo(() => {

  const { languageChange, languageFlag } = useContext(LanguageContext)
  const [isActive, setIsActive] = useState(false)

  const handleLanguageChange = (id, img) => {
    languageChange(id, img)
    setIsActive(false)
  }


  return (
    <div className={style.languageContainer}>
      <div onClick={() => setIsActive(active => !active)}
        className={isActive ? `${style.languageBtn} ${style.active}` : `${style.noActive}`}>

        <img
          src={languageFlag}
          className={isActive ? `${style.defaultLanguageImg} ${style.activeFlag}`
            : `${style.noActiveFlag}`}
          alt={'flag'}
        />
      </div>
      <motion.div className={style.chooseLanguage}
        initial='initial'
        animate='animate'
        exit='exit'
        variants={isActive ? activeChooseLanguage : noActiveChooseLanguage}
        transition={{ duration: .3 }}
      >

        {Object.entries(languageOptions).map(([id, img], index) => (
          <motion.div
            className={style.flagWrapper}
            key={id}
            onClick={() => handleLanguageChange(id, img)}
            layoutId={String(id)}
            variants={isActive ? activeFlag : noActiveFlag}
            initial='initial'
            animate='animate'
            exit='exit'
            custom={index + 1}
          >
            <img src={img} className={style.flagIcon} alt='flag' />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
})
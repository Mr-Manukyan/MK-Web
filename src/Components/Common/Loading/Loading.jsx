import { useTheme } from '../../../Hooks/hooks'
import { motion, AnimatePresence } from 'framer-motion';
import style from './Loading.module.css'

const loadingAnime = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  },
  exit: {
    y: '-100%',
    opacity: 0
  },
}

export const Loading = ({ zIndex = 0, name = 'MK' }) => {
  const { theme } = useTheme()
  return (
    <AnimatePresence mode='wait' key='modal'>
      <motion.div className={style.contentWrapper}
        initial='initial'
        animate='animate'
        exit='exit'
        variants={loadingAnime}
      // transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div className={style.content}>
          <div className={style.container} style={{ zIndex: zIndex }}>
            <div className={style.wrapper}>
              <span className={style.text} id={theme === 'light' ? style.lightText : ''}>{name}</span>
              <div className={style.spinner} id={theme === 'light' ? style.lightSpinner : ''}></div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

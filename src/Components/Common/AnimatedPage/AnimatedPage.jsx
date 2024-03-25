import React from 'react'
import style from './AnimatedPage.module.css'
import { motion } from 'framer-motion'

const animationsTop = {
  initial: {
    opacity: 0,
    x: '-100%',
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: '-100%',
  },
}


export const AnimatedPage = ({
  children,
  duration = 0.5,
}) => {
  return (
    <motion.div
      className={style.animateContainer}
      initial='initial'
      animate='animate'
      exit='exit'
      variants={animationsTop}
      transition={{ duration, delay: .4 }}
    >
      {children}
    </motion.div>
  )
}

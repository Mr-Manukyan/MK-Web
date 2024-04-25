import { useTheme } from '../../../../Hooks/hooks'
import { AnimatePresence, motion } from 'framer-motion'
import style from './MyInfo.module.css'


const animationsRight = {
    initial: {
        opacity: 0,
        y: '-30px',
    },
    animate: {
        opacity: 1,
        y: 0,
    },

}

export const MyInfo = ({ info, custom }) => {
    const { theme } = useTheme()

    return (
        <AnimatePresence mode='wait'>
            <motion.div className={style.body}
                initial='initial'
                whileInView='animate'
                viewport={{ amount: 0.8 }}
                variants={animationsRight}
                transition={{ duration: 0.4, delay: custom * 0.2 }}
            >
                <div className={style.bodyInfo} id={theme === 'light' ? style.lightBodyInfo : ''}>
                    <div className={style.iconWrapper} id={theme === 'light' ? style.lightIconWrapper : ''}>
                        <img src={info.icon} alt="robot" className={style.icon} />
                    </div>
                    <p className={style.info} id={theme === 'light' ? style.lightInfo : ''}>{info.text}</p>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

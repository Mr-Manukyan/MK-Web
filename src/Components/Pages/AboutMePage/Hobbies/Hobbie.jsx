import { useTheme } from '../../../../Hooks/hooks'
import { motion, AnimatePresence } from 'framer-motion';
import style from './Hobbie.module.css'


const hobbiesAnime = {

    initial: {
        opacity: 0,
        rotateY: 360
    },
    animate: {
        opacity: 1,
        rotateY: 0
    },

}

export const Hobbie = ({ hobbie, custom }) => {
    const { theme } = useTheme()

    return (
        <AnimatePresence mode='wait'>
            <motion.div className={style.container} id={theme === 'light' ? style.lightContainer : ''}
                initial='initial'
                animate='animate'
                variants={hobbiesAnime}
                transition={{ duration: 0.6, delay: custom * 0.3 }}
            >
                <div className={style.body} id={theme === 'light' ? style.lightBoddy : ''} >
                    <img src={hobbie.img} alt="hobbiesIcon" className={style.hobbieIcon} />
                </div>
                <p className={style.hobbieName} id={theme === 'light' ? style.lightHobbieName : ''}>{hobbie.hobbieName}</p>
            </motion.div>
        </AnimatePresence>
    )

}

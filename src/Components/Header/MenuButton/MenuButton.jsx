import { motion } from 'framer-motion';
import style from './MenuButton.module.css';
import { useTheme } from '../../../Hooks/hooks';


const menuButtonAnime = {
    initial: {
        opacity: 0,
        y: -50,

    },
    animate: {
        opacity: 1,
        y: 0,
    },

}

export const MenuButton = ({ setIsShowMenuBar, isShowMenuBar }) => {

    const { theme } = useTheme()
    const handleClick = () => {
        setIsShowMenuBar(!isShowMenuBar)
    };

    return (

        <motion.div
            className={`${style.m_button} ${isShowMenuBar ? style.active : ''}`}
            onClick={handleClick}
            id={theme === 'light' ? style.light : ''}
            initial='initial'
            animate='animate'
            variants={menuButtonAnime}
            transition={{ duration: 0.3, delay: 1 }}
        >
            <motion.span
                className={style.bar}
                animate={{ rotate: isShowMenuBar ? -45 : 0 }}
            ></motion.span>
            <motion.span
                className={style.bar}
                animate={{ opacity: isShowMenuBar ? 0 : 1, width: isShowMenuBar ? 0 : 30 }}
            ></motion.span>
            <motion.span
                className={style.bar}
                animate={{ rotate: isShowMenuBar ? 45 : 0 }}
            ></motion.span>
        </motion.div>
    )
}

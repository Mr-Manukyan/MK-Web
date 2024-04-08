import { motion } from 'framer-motion';
import style from './MenuButton.module.css';
import { useTheme } from '../../../Hooks/hooks';

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

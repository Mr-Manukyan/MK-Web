import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../../../Hooks/hooks'
import style from './MenuItem.module.css'

const animationsRight = {
    initial: {
        opacity: 0,
        x: '-50px',
    },
    animate: {
        opacity: 1,
        x: 0,
    },

}


export const MenuItem = ({ itemData, setIsShowMenuBar, custom, isShowMenuBar }) => {

    const { theme } = useTheme()
    const screenWidthSize = window.innerWidth

    const buttonClick = () => {
        setIsShowMenuBar(false)
    }


    return (

        <AnimatePresence mode='wait' key={custom}>
            <motion.li id={theme === 'light' ? style.light : ''}
                initial='initial'
                whileInView='animate'
                viewport={{ amount: 0.7 }}
                variants={screenWidthSize < 767 ? animationsRight : null}
                transition={{ duration: 0.2, delay: custom * 0.1 }}
            >
                <NavLink to={itemData.path}
                    data-text={itemData.title}
                    onClick={buttonClick}
                    className={({ isActive }) => isActive ? style.active : style.noActiveLink}
                    id={theme === 'light' ? style.lightActive : ''}
                >
                    {itemData.title}
                </NavLink>
            </motion.li>
        </AnimatePresence>
    )
}







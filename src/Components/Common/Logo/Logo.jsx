import logo from '../../../Assets/icons/logo.png'
import { useTheme } from '../../../Hooks/hooks'
import { motion } from 'framer-motion';
import style from './Logo.module.css'


const logoAnime = {
    initial: {
        opacity: 0,
        scale: 0,
    },
    animate: {
        opacity: 1,
        scale: 1,
        rotateY: 360
    },

}

export const Logo = () => {
    const { theme, lightColor } = useTheme()
    return (
        <motion.div className={style.wrapper} style={
            {
                background: theme === 'light' ? lightColor.bg : '',
                boxShadow: theme === 'light' ? lightColor.boxShadowUp : ''

            }
        }
            initial='initial'
            animate='animate'
            variants={logoAnime}
            transition={{ duration: 0.7, delay: 0.1 }}
        >
            <img src={logo} alt="logo" className={style.logo} />
        </motion.div>
    )
}

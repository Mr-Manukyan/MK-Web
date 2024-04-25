import { motion, AnimatePresence } from 'framer-motion';
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { PiFacebookLogoBold } from "react-icons/pi";
import { AiFillGithub } from "react-icons/ai";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { useTheme } from '../../../Hooks/hooks';
import style from './SocialButton.module.css'

const buttonAnimate = {
    initial: {
        opacity: 0,
        scale: 0

    },
    animate: {
        opacity: 1,
        scale: 1
    },
}

export const SocialButton = ({ name, href, custom }) => {
    const { theme } = useTheme()

    return (
        <AnimatePresence mode='wait'>
            <motion.div className={style.button} id={theme === 'light' ? style.light : ''}
                initial='initial'
                animate='animate'
                variants={buttonAnimate}
                transition={{ duration: 0.1, delay: custom * 0.2 }}
            >
                <a href={href} className={style.icon} target="_blank" rel="noreferrer">
                    {name === 'linkedin' && <TiSocialLinkedinCircular />}
                    {name === 'facebook' && <PiFacebookLogoBold />}
                    {name === 'github' && <AiFillGithub />}
                    {name === 'twitter' && <TiSocialTwitterCircular />}
                </a>
            </motion.div>
        </AnimatePresence>
    )
}

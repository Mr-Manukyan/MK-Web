import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import style from './UserAvatar.module.css';
import logo from '../../../Assets/icons/planat.png'
import userIcon from '../../../Assets/icons/Karen-S.png'
import { useTheme } from '../../../Hooks/hooks';

const animationsRight = {
    initial: {
        opacity: 0,
        x: '100px',
        scale: 2
    },
    animate: {
        opacity: 1,
        x: 0,
    },

}

export const UserAvatar = () => {
    const { theme } = useTheme()

    return (
        <div className={style.waveContainer}>
            <AnimatePresence mode='wait'>
                <motion.div
                    className={style.ripple}
                    id={theme === 'light' ? style.light : ''}
                    initial='initial'
                    animate='animate'
                    variants={animationsRight}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className={style.userIconWrapper}>
                        <img src={userIcon} alt="logo" className={style.userIcon} />
                    </div>
                    <img src={logo} alt="logo" className={style.logo} />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};



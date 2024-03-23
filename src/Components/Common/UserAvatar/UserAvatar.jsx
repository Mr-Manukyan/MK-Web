import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import style from './UserAvatar.module.css';
import logo from '../../../Assets/icons/planat.png'
import userIcon from '../../../Assets/icons/Karen-S.png'



export const UserAvatar = () => {
    return (
        <div className={style.waveContainer}>
            <AnimatePresence mode='wait'>
                <motion.div
                    className={style.ripple}
                    animate={{ scale: [0, 2], opacity: [1, 1] }}
                    transition={{ duration: 1 }}
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



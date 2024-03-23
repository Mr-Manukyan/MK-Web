import { useState } from 'react';
import { motion } from 'framer-motion';
import style from './MenuButton.module.css';

export const MenuButton = ({ setIsShowMenuBar, isShowMenuBar }) => {


    const handleClick = () => {
        setIsShowMenuBar(!isShowMenuBar)
    };

    return (

        <motion.div
            className={`${style.m_button} ${isShowMenuBar ? style.active : ''}`}
            onClick={handleClick}
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

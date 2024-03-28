import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './StarrySky.module.css';


const starAnime = {
    hidden: {
        opacity: 1,
        scale: 0.5,
    },

    visible: (custom) => ({
        opacity: 1,
        scale: 2,
        transition: { duration: 1, repeat: Infinity, delay: custom * 0.2 }

    }),

    // exit: (custom) => ({
    //     opacity: 1,
    //     scale: 0.5,
    //     textShadow: '0 0 5px rgb(247, 247, 247);',
    //     transition: { duration: 1, repeat: Infinity, delay: custom * 0.2 }

    // }),

}

export const StarrySky = () => {


    return (
        <div className={styles.container}>

            <motion.p className={styles.star}
                initial='hidden'
                animate='visible'
                variants={starAnime}
            >

            </motion.p>

        </div>
    );

};

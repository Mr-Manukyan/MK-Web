import { motion } from 'framer-motion'
import style from './InfoLanguage.module.css'

const stars = {
    Eng: [
        {
            star: '☆',
            active: true
        },
        {
            star: '☆',
            active: true
        },
        {
            star: '☆',
            active: false
        },
        {
            star: '☆',
            active: false
        },
        {
            star: '☆',
            active: false
        },
        {
            star: '☆',
            active: false
        },
    ],
    Rus: [
        {
            star: '☆',
            active: true
        },
        {
            star: '☆',
            active: true
        },
        {
            star: '☆',
            active: true
        },
        {
            star: '☆',
            active: true
        },
        {
            star: '☆',
            active: false
        },
        {
            star: '☆',
            active: false
        },
    ],
    Arm: [
        {
            star: '☆',
            active: true
        },
        {
            star: '☆',
            active: true
        },
        {
            star: '☆',
            active: true
        },
        {
            star: '☆',
            active: true
        },
        {
            star: '☆',
            active: true
        },
        {
            star: '☆',
            active: true
        },
    ]

}

const languageAnime = {
    hidden: {
        opacity: 0,
        x: '-20px'
    },
    visible: {
        opacity: 1,
        x: '0px',
    },
}

const starsAnime = {
    hidden: {
        opacity: 0,
    },
    visible: (custom) => ({
        opacity: 1,
        transition: { delay: custom * 0.2 }
    }),
}

export const InfoLanguage = () => {
    return (
        <div className={style.languageContainer}>

            <div className={style.languageInfoWrapper}>
                <motion.p className={style.language}
                    initial='hidden'
                    variants={languageAnime}
                    whileInView="visible"
                    viewport={{ amount: 0.8, once: true }}
                    transition={{ duration: .4, }}
                >English</motion.p>
                {stars.Eng.map((star, i) => (
                    <motion.p key={i} className={star.active ? style.active : style.star}
                        initial='hidden'
                        variants={starsAnime}
                        whileInView="visible"
                        viewport={{ amount: 0.8, once: true }}
                        custom={i + 1}
                    >{star.star}</motion.p>
                ))}

            </div>
            <div className={style.languageInfoWrapper}>
                <motion.p className={style.language}
                    initial='hidden'
                    variants={languageAnime}
                    whileInView="visible"
                    viewport={{ amount: 0.8, once: true }}
                    transition={{ duration: .4, delay: 1 }}
                >Russian
                </motion.p>
                {stars.Rus.map((star, i) => (
                    <motion.p key={i} className={star.active ? style.active : style.star}
                        initial='hidden'
                        variants={starsAnime}
                        whileInView="visible"
                        viewport={{ amount: 0.8, once: true }}
                        custom={i + 6}
                    >{star.star}</motion.p>
                ))}
            </div>
            <div className={style.languageInfoWrapper}>
                <motion.p className={style.language}
                    initial='hidden'
                    variants={languageAnime}
                    whileInView="visible"
                    viewport={{ amount: 0.8, once: true }}
                    transition={{ duration: .4, delay: 2 }}
                >Armenian
                </motion.p>
                {stars.Arm.map((star, i) => (
                    <motion.p key={i} className={star.active ? style.active : style.star}
                        initial='hidden'
                        variants={starsAnime}
                        whileInView="visible"
                        viewport={{ amount: 0.8, once: true }}
                        custom={i + 11}
                    >{star.star}</motion.p>
                ))}
            </div>

        </div>
    )
}

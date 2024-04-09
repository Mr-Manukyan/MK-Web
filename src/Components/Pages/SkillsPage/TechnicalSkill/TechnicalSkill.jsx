import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import style from './TechnicalSkill.module.css'
import { useTheme } from '../../../../Hooks/hooks'



export const TechnicalSkill = ({ percentNum, icon, name }) => {
    const { theme } = useTheme()
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true
    })
    const [percent, setPercent] = useState(0)

    useEffect(() => {
        let intervalId;

        if (inView) {
            intervalId = setInterval(() => {
                setPercent(prevPercent => prevPercent >= percentNum ? prevPercent : prevPercent + 1)
            }, 20);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [inView]);



    return (
        <div className={style.container} ref={ref}>

            <div className={style.iconWrapper}>
                <img src={icon} alt="icon" className={style.icon} />
            </div>
            <div className={style.contentWrapper} id={theme === 'light' ? style.light : ''}>
                <motion.div className={style.wrapper}
                    initial={{ width: 0 }}
                    animate={{ width: `${percent}%` }}
                    transition={{ duration: `.${percent}%` }}
                >
                </motion.div>
                <div className={style.percent} id={theme === 'light' ? style.lightPercent : ''}>
                    {`${percent}%`}
                </div>
            </div>
            <p className={style.technicalName} id={theme === 'light' ? style.lightName : ''}>{name}</p>
        </div>
    )
}

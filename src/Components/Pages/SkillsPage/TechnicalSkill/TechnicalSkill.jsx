import { useEffect, useRef, useState } from 'react'
import style from './TechnicalSkill.module.css'
import { motion } from 'framer-motion'


export const TechnicalSkill = ({ pracentNum, icon, name }) => {

    const [pracent, setPracent] = useState(0)
    const timeoutId = useRef(null)

    useEffect(() => {
        for (let i = 0; i <= pracentNum; i++) {
            timeoutId.current = setTimeout(() => {
                setPracent(i)
            }, (i * 20))
        }
        return () => {
            clearTimeout(timeoutId.current);
        };
    }, [])



    return (
        <div className={style.container}>

            <div className={style.iconWrapper}>
                <img src={icon} alt="icon" className={style.icon} />
            </div>
            <div className={style.contentWrapper}>
                <motion.div className={style.wrapper}
                    initial={{ width: 0 }}
                    animate={{ width: `${pracent}%` }}
                    transition={{ duration: `.${pracent}%` }}
                >
                </motion.div>
                <div className={style.pracent}>
                    {`${pracent}%`}
                </div>
            </div>
            <p className={style.technicalName}>{name}</p>
        </div>
    )
}

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer'
import style from './ProfessionalSkill.module.css';
import { useTheme } from '../../../../Hooks/hooks';


export const ProfessionalSkill = ({ percentNum = 78, name }) => {
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
        <div className={style.container} ref={ref} id={theme === 'light' ? style.light : ''}>
            <div className={style.circleContainer} id={theme === 'light' ? style.lightcircleContainer : ''} >
                <div className={style.circleWrapper} id={theme === 'light' ? style.light : ''}>
                    <svg className={style.svgCircle} viewBox="0 0 100 100">
                        <circle
                            className={style.percentCircle}
                            cx="50"
                            cy="50"
                            r="45"
                            style={{ strokeDasharray: `${percent * 2.83}px 283px`, transform: `rotate(-90deg)` }}

                        />
                    </svg>
                    <p className={style.percent} id={theme === 'light' ? style.lightPercent : ''}>{percent}%</p>
                </div>
            </div>
            <p className={style.professionName} id={theme === 'light' ? style.lightName : ''}>{name}</p>
        </div>
    );
};

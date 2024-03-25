import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer'
import style from './ProfessionalSkill.module.css';


export const ProfessionalSkill = ({ percentNum = 78, name }) => {

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
            <div className={style.circleContainer}>
                <div className={style.circleWrapper}>
                    <svg className={style.svgCircle} viewBox="0 0 100 100">
                        <circle
                            className={style.percentCircle}
                            cx="50"
                            cy="50"
                            r="45"
                            style={{ strokeDasharray: `${percent * 2.83}px 283px`, transform: `rotate(-90deg)` }}

                        />
                    </svg>
                    <p className={style.percent}>{percent}%</p>
                </div>
            </div>
            <p className={style.professionName}>{name}</p>
        </div>
    );
};

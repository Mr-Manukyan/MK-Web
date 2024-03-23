import React, { useState, useEffect, useRef } from 'react';
import style from './ProfessionalSkill.module.css';


export const ProfessionalSkill = ({ pracentNum = 68, name }) => {

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
            <div className={style.circleContainer}>
                <div className={style.circleWrapper}>
                    <svg className={style.svgCircle} viewBox="0 0 100 100">
                        <circle
                            className={style.pracentCircle}
                            cx="50"
                            cy="50"
                            r="45"
                            style={{ strokeDasharray: `${pracent * 2.83}px 283px`, transform: `rotate(-90deg)` }}

                        />
                    </svg>
                    <p className={style.pracent}>{pracent}%</p>
                </div>
            </div>
            <p className={style.professionName}>{name}</p>
        </div>
    );
};

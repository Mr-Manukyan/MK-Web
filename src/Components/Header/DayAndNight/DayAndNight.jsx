import { BsMoonStars } from "react-icons/bs";
import { ImSun } from "react-icons/im";
import style from './DayAndNight.module.css'

export const DayAndNight = () => {
    return (
        <div className={style.inputGroup}>
            <input type="checkbox" id="mode" className={style.inputStyle} />
            <label htmlFor="mode" className={style.labelStyle}>
                <span className={style.innerContent}>
                    <span className={style.lightIcon}>
                        <ImSun />
                    </span>
                    <span className={style.darkIcon}>
                        <BsMoonStars />
                    </span>
                </span>
            </label>
        </div>
    )
}

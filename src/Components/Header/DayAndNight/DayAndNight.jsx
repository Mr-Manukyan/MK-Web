import { BsMoonStars } from "react-icons/bs";
import { ImSun } from "react-icons/im";
import style from './DayAndNight.module.css'
import { useTheme } from "../../../Hooks/hooks";

export const DayAndNight = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={style.inputGroup}>
            <input type="checkbox" id="mode" className={style.inputStyle}
                checked={theme === 'dark' ? true : false}
                onChange={toggleTheme}
            />
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

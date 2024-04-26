import { BsMoonStars } from "react-icons/bs";
import { ImSun } from "react-icons/im";
import { useTheme } from "../../../Hooks/hooks";
import { motion } from 'framer-motion';
import style from './DayAndNight.module.css'

const colorAnime = {
    initial: {
        opacity: 0,
        y: -50,
        rotateZ: 90

    },
    animate: {
        opacity: 1,
        y: 0,
    },

}
export const DayAndNight = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <motion.div className={style.inputGroup} id={theme === 'light' ? style.light : ''}
            initial='initial'
            animate='animate'
            variants={colorAnime}
            transition={{ duration: 0.3, delay: 1 }}
        >
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
        </motion.div>
    )
}

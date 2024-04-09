import { useTheme } from '../../../../Hooks/hooks'
import style from './MyInfo.module.css'

export const MyInfo = ({ info }) => {
    const { theme } = useTheme()

    return (
        <div className={style.body}>
            <div className={style.bodyInfo} id={theme === 'light' ? style.lightBodyInfo : ''}>
                <div className={style.iconWrapper} id={theme === 'light' ? style.lightIconWrapper : ''}>
                    <img src={info.icon} alt="robot" className={style.icon} />
                </div>
                <p className={style.info} id={theme === 'light' ? style.lightInfo : ''}>{info.text}</p>
            </div>
        </div>
    )
}

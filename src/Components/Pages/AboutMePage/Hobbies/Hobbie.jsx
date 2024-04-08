import { useTheme } from '../../../../Hooks/hooks'
import style from './Hobbie.module.css'

export const Hobbie = ({ hobbie }) => {
    const { theme } = useTheme()

    return (
        <div className={style.container} id={theme === 'light' ? style.lightContainer : ''}>
            <div className={style.body} id={theme === 'light' ? style.lightBoddy : ''} >
                <img src={hobbie.img} alt="hobbiesIcon" className={style.hobbieIcon} />
            </div>
            <p className={style.hobbieName} id={theme === 'light' ? style.lightHobbieName : ''}>{hobbie.hobbieName}</p>
        </div>
    )

}

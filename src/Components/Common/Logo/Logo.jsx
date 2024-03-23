import style from './Logo.module.css'
import logo from '../../../Assets/icons/logo.png'

export const Logo = () => {
    return (
        <div className={style.wrapper}>
            <img src={logo} alt="logo" className={style.logo} />
        </div>
    )
}

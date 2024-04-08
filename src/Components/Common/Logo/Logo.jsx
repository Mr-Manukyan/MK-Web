import style from './Logo.module.css'
import logo from '../../../Assets/icons/logo.png'
import { useTheme } from '../../../Hooks/hooks'

export const Logo = () => {
    const { theme, lightColor } = useTheme()
    return (
        <div className={style.wrapper} style={
            {
                background: theme === 'light' ? lightColor.bg : '',
                boxShadow: theme === 'light' ? lightColor.boxShadowUp : ''

            }
        }>
            <img src={logo} alt="logo" className={style.logo} />
        </div>
    )
}

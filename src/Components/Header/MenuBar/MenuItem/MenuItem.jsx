import { NavLink } from 'react-router-dom'
import style from './MenuItem.module.css'
import { useTheme } from '../../../../Hooks/hooks'



export const MenuItem = ({ itemData, setIsShowMenuBar, isShowMenuBar, custom }) => {

    const { theme } = useTheme()

    const buttonClick = () => {
        setIsShowMenuBar(false)
    }

    return (

        <li id={theme === 'light' ? style.light : ''}>
            <NavLink to={itemData.path}
                data-text={itemData.title}
                onClick={buttonClick}
                className={({ isActive }) => isActive ? style.active : style.noActiveLink}
                id={theme === 'light' ? style.lightActive : ''}
            >
                {itemData.title}
            </NavLink>
        </li>

    )
}







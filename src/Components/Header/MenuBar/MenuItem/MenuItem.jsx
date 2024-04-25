import { NavLink } from 'react-router-dom'
import { useTheme } from '../../../../Hooks/hooks'
import style from './MenuItem.module.css'




export const MenuItem = ({ itemData, setIsShowMenuBar, custom, isShowMenuBar }) => {

    const { theme } = useTheme()
    // const screenWidthSize = window.innerWidth

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







import { NavLink } from 'react-router-dom'
import style from './MenuItem.module.css'



export const MenuItem = ({ itemData, setIsShowMenuBar, isShowMenuBar, custom }) => {

    const buttonClick = () => {
        setIsShowMenuBar(false)
    }

    return (

        <li>
            <NavLink to={itemData.path}
                data-text={itemData.title}
                onClick={buttonClick}
                className={({ isActive }) => isActive ? style.active : style.noActiveLink}
            >
                {itemData.title}
            </NavLink>
        </li>

    )
}







import React from 'react'
import { MenuItem } from "./MenuItem/MenuItem"
import style from './MenuBar.module.css'
import { useTheme } from '../../../Hooks/hooks'



export const MenuBar = React.memo(({ sideBarData, setIsShowMenuBar, isShowMenuBar }) => {

    const { theme } = useTheme()

    return (
        <nav className={isShowMenuBar ? `${style.navNenuContainer} ${style.active}` : style.navNenuContainer}
            id={theme === 'light' ? style.light : ''}
        >
            <ul className={style.menuItemWrapper} id={theme === 'light' ? style.lightMenu : ''}>
                {sideBarData.map((item, index) => {
                    return <MenuItem key={index}
                        itemData={item}
                        setIsShowMenuBar={setIsShowMenuBar}
                        isShowMenuBar={isShowMenuBar}
                        custom={index + 1}
                    />
                })}
            </ul>
        </nav>
    )
})



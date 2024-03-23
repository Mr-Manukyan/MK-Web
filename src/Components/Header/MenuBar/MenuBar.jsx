import React from 'react'
import { MenuItem } from "./MenuItem/MenuItem"
import style from './MenuBar.module.css'



export const MenuBar = React.memo(({ sideBarData, setIsShowMenuBar, isShowMenuBar }) => {

    return (
        <nav className={isShowMenuBar ? `${style.navNenuContainer} ${style.active}` : style.navNenuContainer}>
            <ul className={style.menuItemWrapper}>
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



import { useState } from 'react'
import style from './Headeer.module.css'
import { Logo } from '../Common/Logo/Logo'
import { MenuBar } from './MenuBar/MenuBar'
import { SidebarData } from './SideBarData'
import { MenuButton } from './MenuButton/MenuButton'
import { DayAndNight } from './DayAndNight/DayAndNight'
import { useTheme } from '../../Hooks/hooks'





export const Header = () => {

    const [isShowMenuBar, setIsShowMenuBar] = useState(false)
    const { theme, lightColor } = useTheme()

    console.log(lightColor)

    return (
        <>
            <header className={style.headerContainer}>
                <div className={style.headerWrapper} style={
                    {
                        background: theme === 'light' ? lightColor.bg : '',
                        boxShadow: theme === 'light' ? lightColor.boxShadowInto : ''

                    }
                }>

                    <div className={style.logoContainer}>
                        <Logo />
                    </div>

                    <MenuBar sideBarData={SidebarData}
                        isShowMenuBar={isShowMenuBar}
                        setIsShowMenuBar={setIsShowMenuBar} />


                    <div className={style.dayNightWrapper}>
                        <DayAndNight />
                    </div>

                    <div className={style.menuButtonWrapper}>
                        <MenuButton setIsShowMenuBar={setIsShowMenuBar} isShowMenuBar={isShowMenuBar} />
                    </div>

                </div>
                <div className={style.control}></div>
            </header>

        </>
    )
}

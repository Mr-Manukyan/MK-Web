import { useState } from 'react'
import style from './Headeer.module.css'
import { Logo } from '../Common/Logo/Logo'
import { MenuBar } from './MenuBar/MenuBar'
import { SidebarData } from './SideBarData'
import { MenuButton } from './MenuButton/MenuButton'
import { ChooseLanguage } from '../Common/ChooseLanguage/ChooseLanguage'




export const Header = () => {

    const [isShowMenuBar, setIsShowMenuBar] = useState(false)

    return (
        <>
            <header className={style.headerContainer}>
                <div className={style.headerWrapper}>

                    <div className={style.logoContainer}>
                        <Logo />
                    </div>

                    <MenuBar sideBarData={SidebarData}
                        isShowMenuBar={isShowMenuBar}
                        setIsShowMenuBar={setIsShowMenuBar} />


                    <div className={style.languageAndDayNightWrapper}>
                        <ChooseLanguage />
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

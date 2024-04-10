import { motion } from 'framer-motion'
import { AnimatedPage } from '../../Common/AnimatedPage/AnimatedPage'
import { useTheme } from '../../../Hooks/hooks'
import { myInfoData } from './MyInfo/MyInfoData'
import robotGif from '../../../Assets/icons/robotHello.gif'
import style from './ContactMePage.module.css'
import { MyInfo } from './MyInfo/MyInfo'

const robotAnime = {
    hidden: {
        opacity: 0,
        x: '-100px'
    },
    visible: {
        opacity: 1,
        x: '0px',
        transition: { duration: 0.4, delay: 0.2 }
    }
}

export const ContactMePage = () => {
    const { theme } = useTheme()
    return (
        <AnimatedPage>
            <div className={style.container}>
                <div className={style.contentContainer} id={theme === 'light' ? style.light : ''}>
                    <h3 className={style.contactParagraph} id={theme === 'light' ? style.lightParagraph : ''}>My contacts</h3>
                    <div className={style.contentWrapper} id={theme === 'light' ? style.lightContentWrapper : ''} >
                        <div className={style.robotWrapper} id={theme === 'light' ? style.lightRobotWrapper : ''} >
                            <div className={style.robotContent} id={theme === 'light' ? style.lightRobotContent : ''} >
                                <motion.img src={robotGif} alt="robot" className={style.robot}
                                    initial='hidden'
                                    animate='visible'
                                    variants={robotAnime}
                                />
                            </div>
                        </div>
                        <div className={style.control} id={theme === 'light' ? style.lightControl : ''} ></div>
                        <div className={style.content} id={theme === 'light' ? style.lightContent : ''}>
                            <div className={style.wrapper}>
                                <p className={style.info} id={theme === 'light' ? style.lightInfo : ''}>My Info</p>
                                {myInfoData.map(info => <MyInfo key={info.id} info={info} />)}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </AnimatedPage>
    )
}

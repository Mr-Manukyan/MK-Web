import { motion } from 'framer-motion'
import { AnimatedPage } from '../../Common/AnimatedPage/AnimatedPage'
import robotGif from '../../../Assets/icons/robotHello.gif'
import gmailIcon from '../../../Assets/icons/gmail.png'
import phoneIcon from '../../../Assets/icons/call.png'
import postIcon from '../../../Assets/icons/post.png'
import style from './ContactMePage.module.css'
import { useTheme } from '../../../Hooks/hooks'

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

                                <div className={style.body}>
                                    <div className={style.bodyInfo} id={theme === 'light' ? style.lightBodyInfo : ''}>
                                        <div className={style.iconWrapper} id={theme === 'light' ? style.lightIconWrapper : ''}>
                                            <motion.img src={postIcon} alt="robot" className={style.icon}
                                                initial='hidden'
                                                animate='visible'
                                                variants={robotAnime}
                                            />
                                        </div>
                                        <p className={style.info} id={theme === 'light' ? style.lightInfo : ''}>Yerevan, Armenia P.O. 0054</p>
                                    </div>
                                </div>

                                <div className={style.body}>
                                    <div className={style.bodyInfo} id={theme === 'light' ? style.lightBodyInfo : ''} >
                                        <div className={style.iconWrapper} id={theme === 'light' ? style.lightIconWrapper : ''}>
                                            <motion.img src={gmailIcon} alt="robot" className={style.icon}
                                                initial='hidden'
                                                animate='visible'
                                                variants={robotAnime}
                                            />
                                        </div>
                                        <p className={style.info} id={theme === 'light' ? style.lightInfo : ''}>arm.karen.manukyan@gmail.com</p>
                                    </div>
                                </div>
                                <div className={style.body}>
                                    <div className={style.bodyInfo} id={theme === 'light' ? style.lightBodyInfo : ''}>
                                        <div className={style.iconWrapper} id={theme === 'light' ? style.lightIconWrapper : ''} >
                                            <motion.img src={phoneIcon} alt="robot" className={style.icon}
                                                initial='hidden'
                                                animate='visible'
                                                variants={robotAnime}
                                            />
                                        </div>
                                        <p className={style.info} id={theme === 'light' ? style.lightInfo : ''}>+374-33-065-064</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </AnimatedPage>
    )
}

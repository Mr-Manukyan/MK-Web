import { motion } from 'framer-motion'
import { AnimatedPage } from '../../Common/AnimatedPage/AnimatedPage'
import robotGif from '../../../Assets/icons/robotHello.gif'
import gmailIcon from '../../../Assets/icons/gmail.png'
import phoneIcon from '../../../Assets/icons/call.png'
import postIcon from '../../../Assets/icons/post.png'

import style from './ContactMePage.module.css'

import { StarrySky } from '../../Common/StarrySky/StarrySky'

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
    return (
        <AnimatedPage>
            <div className={style.container}>
                <div className={style.contentContainer}>
                    <h3 className={style.contactParagraph}>My contacts</h3>
                    <div className={style.contentWrapper}>
                        <div className={style.robotWrapper}>
                            <div className={style.robotContent}>
                                <motion.img src={robotGif} alt="robot" className={style.robot}
                                    initial='hidden'
                                    animate='visible'
                                    variants={robotAnime}
                                />
                            </div>
                        </div>
                        <div className={style.control}></div>
                        <div className={style.content}>
                            <div className={style.wrapper}>

                                <div className={style.body}>
                                    <div className={style.bodyInfo}>
                                        <div className={style.iconWrapper}>
                                            <motion.img src={postIcon} alt="robot" className={style.icon}
                                                initial='hidden'
                                                animate='visible'
                                                variants={robotAnime}
                                            />
                                        </div>
                                        <p className={style.info}>Yerevan, Armenia P.O. 0054</p>
                                    </div>
                                </div>

                                <div className={style.body}>
                                    <div className={style.bodyInfo}>
                                        <div className={style.iconWrapper}>
                                            <motion.img src={gmailIcon} alt="robot" className={style.icon}
                                                initial='hidden'
                                                animate='visible'
                                                variants={robotAnime}
                                            />
                                        </div>
                                        <p className={style.info}>arm.karen.manukyan@gmail.com</p>
                                    </div>
                                </div>
                                <div className={style.body}>
                                    <div className={style.bodyInfo}>
                                        <div className={style.iconWrapper}>
                                            <motion.img src={phoneIcon} alt="robot" className={style.icon}
                                                initial='hidden'
                                                animate='visible'
                                                variants={robotAnime}
                                            />
                                        </div>
                                        <p className={style.info}>+374-33-065-064</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <StarrySky /> */}
            </div>
        </AnimatedPage>
    )
}

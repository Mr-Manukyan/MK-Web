import { AnimatedPage } from '../../Common/AnimatedPage/AnimatedPage'
import { hobbiesData } from './hobbiesData'
import { motion, AnimatePresence } from 'framer-motion';
import { Hobbie } from './Hobbies/Hobbie'
import dragon from '../../../Assets/icons/dragon.png'
import userIcon from '../../../Assets/icons/user.png'
import { useTheme } from '../../../Hooks/hooks'
import style from './AboutMePage.module.css'

const anime = {
    initial: {
        opacity: 0,
        scale: 0.2
    },
    animate: {
        opacity: 1,
        scale: 1
    },

}



export const AboutMePage = () => {
    const { theme, lightColor } = useTheme()

    return (
        <AnimatedPage>
            <div className={style.container}>
                <div className={style.contentContainer} style={
                    {
                        background: theme === 'light' ? lightColor.bg : '',
                        boxShadow: theme === 'light' ? lightColor.boxShadowInto : ''

                    }
                }>
                    <h3 className={style.aboutMeParagraph} id={theme === 'light' ? style.light : ''}>About Me</h3>
                    <div className={style.contentWrapper}>
                        <div className={style.messageMain}>
                            <div className={style.messageBody} id={theme === 'light' ? style.lightMessageBody : ''} >
                                <AnimatePresence mode='wait'>
                                    <motion.div className={style.imgWrapper} id={theme === 'light' ? style.lightImgWrapper : ''}
                                        initial='initial'
                                        whileInView='animate'
                                        viewport={{ amount: 0.5 }}
                                        variants={anime}
                                        transition={{ duration: 0.7, delay: 0.2 }}
                                    >
                                        <div className={style.imgUserContnet} id={theme === 'light' ? style.lightImgUserContnet : ''} >
                                            <img src={userIcon} alt="userIcon" className={style.userIcon} />
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                                <div className={style.messageContainer} id={theme === 'light' ? style.lightMessageContainer : ''} >
                                    <div className={style.messageWrapper}>

                                        <p className={style.message} id={theme === 'light' ? style.lightMessage : ''}>

                                            Hi !

                                            Let me briefly introduce myself and explain why I have chosen this path, why I enjoy it,
                                            and why I believe I deserve a chance. <span>About myself</span> - At 35 years old, after exploring various fields,
                                            I aimed to find a job that would become a beloved pursuit,
                                            where time would flow seamlessly, making life brighter and more joyful.
                                            Traveling through different domains, I witnessed, heard,
                                            and felt much that led me to programming. <span>Why this path?</span> - In search of answers, I turned to the lessons life has taught me.
                                            When we leverage our strengths and improve our weaknesses,
                                            we can achieve outstanding results. I realized the importance of utilizing my strengths.
                                            I grew up on fantasy movies, was fascinated by computers and complex logic games,
                                            and my legal knowledge enables me to understand human psychology, and so forth.
                                            <span> Why I enjoy programming</span> - Programming is not just a job for me; it's a way to find solutions, a reflection of
                                            the world through the lens of code, where every problem has its solution.
                                            It not only helps solve tasks but also shapes the ability to find optimal paths in life.
                                            The virtual world that can be created relying solely on imagination and knowledge inspires me. <span>Why I deserve a chance?</span> - Well, because everyone deserves it<span className={style.smiley}>😊</span>. But on a serious note,
                                            I am not just studying Frontend, Backend, and databases,
                                            but also aspire to communicate with experienced professionals ready
                                            to share their knowledge and become good friends. I am driven, ready
                                            to continue evolving and achieving goals, and I believe that together we can accomplish more.
                                            Thank you for your attention, and I look forward to our future collaboration. <span>Best regards` M.K.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.hobbiesMain}>
                            <div className={style.hobbiesBody} id={theme === 'light' ? style.lightHobbiesBody : ''} >
                                <AnimatePresence mode='wait'>
                                    <motion.div className={style.imgWrapper} id={theme === 'light' ? style.lightImgWrapper : ''}
                                        initial='initial'
                                        whileInView='animate'
                                        viewport={{ amount: 0.5 }}
                                        variants={anime}
                                        transition={{ duration: 0.7, delay: 0.2 }}
                                    >
                                        <div className={style.imgLogoContnet} id={theme === 'light' ? style.lightImgLogoContnet : ''}>
                                            <img src={dragon} alt="logoIcon" className={style.dragonIcon} />
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                                <div className={style.hobbiesContainer} id={theme === 'light' ? style.lightHobbiesContainer : ''} >
                                    <div className={style.hobbiesWrapper}>

                                        <div className={style.mottoBody}>
                                            <p className={style.paragraphMotto} id={theme === 'light' ? style.lightParagraphMotto : ''}>My motto</p>
                                            <p className={style.motto} id={theme === 'light' ? style.lightMotto : ''}>If no one could do it, I will be the first one to pull that off.</p>

                                        </div>

                                        <p className={style.paragraphHobbies} id={theme === 'light' ? style.lightParagraphHobbies : ''}>My Hobbies</p>
                                        <div className={style.hobbiesContent}>
                                            {hobbiesData.map((hobbie, index) => (
                                                <Hobbie hobbie={hobbie} key={index} custom={index + 1} />
                                            ))}

                                        </div>
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

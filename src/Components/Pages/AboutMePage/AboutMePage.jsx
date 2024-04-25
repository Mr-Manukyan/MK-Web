import { AnimatedPage } from '../../Common/AnimatedPage/AnimatedPage'
import { hobbiesData } from './hobbiesData'
import { motion, AnimatePresence } from 'framer-motion';
import { Hobbie } from './Hobbies/Hobbie'
import dragon from '../../../Assets/icons/dragon.png'
import userIcon from '../../../Assets/icons/user.png'
import { useTheme } from '../../../Hooks/hooks'
import style from './AboutMePage.module.css'

const rotateAnimeRight = {
    initial: {
        x: '-100%'
    },
    animate: {
        x: 0
    },

}

const rotateAnimeLeft = {
    initial: {
        x: '100%'
    },
    animate: {
        x: 0
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
                                        variants={rotateAnimeRight}
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

                                            I am an avid fan of discovering new avenues for
                                            my professional growth, consequently I'm
                                            stillself studying and improving my skills on my
                                            own.
                                            . I understand very wellthe interactions between
                                            the front end backend and the database.
                                            . I'm a quick learner and I accept challenges in
                                            any area and handle them very well due to my
                                            good problem solving skills, that's the reason
                                            hidden behind the factthatI manoeuvre in case of
                                            errors in the codes quickly.
                                            .I'm looking for a good professional
                                            environmentto thrive in ))).
                                            at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                                            consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
                                            classical literature, discovered the undoubtable source.
                                            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum
                                            et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                                            This book is a treatise on the theory of ethics, very popular during the Renaissance.
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
                                        variants={rotateAnimeLeft}
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

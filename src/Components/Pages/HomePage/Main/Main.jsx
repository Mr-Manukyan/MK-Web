import { motion, AnimatePresence } from 'framer-motion';
import { CirclePit } from '../../../Common/CirclePit/CirclePit'
import { UserAvatar } from '../../../Common/UserAvatar/UserAvatar'
import { TypeAnimation } from 'react-type-animation';
import { useTheme } from '../../../../Hooks/hooks';
import style from './Main.module.css'


const animationsRight = {
    initial: {
        opacity: 0,
        x: '-100px',
    },
    animate: {
        opacity: 1,
        x: 0,
    },

}

export const Main = () => {

    const { theme, lightColor } = useTheme()

    return (
        <div className={style.mainContainer}>

            <div className={style.leftContent} style={
                {
                    background: theme === 'light' ? lightColor.bg : '',
                    boxShadow: theme === 'light' ? lightColor.boxShadowInto : ''

                }
            }>
                <AnimatePresence mode='wait'>
                    <motion.div className={style.leftContentWrapper}
                        initial='initial'
                        animate='animate'
                        variants={animationsRight}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >

                        <div className={style.nameWrapper}>
                            <p className={style.infoName} style={
                                {
                                    color: theme === 'light' ? lightColor.text : '',
                                }
                            }>Hello, my name is`</p>
                            <p className={style.name}>Karen Manukyan</p>
                        </div>

                        <div className={style.professionWrapper}>
                            <p className={style.profession} style={
                                {
                                    color: theme === 'light' ? lightColor.text : '',
                                }
                            }>I am a`</p>
                            <div className={style.professionAnimeWrapper}>

                                <TypeAnimation
                                    sequence={[
                                        'Frontend Developer,',
                                        1000,
                                        'UI and UX designer,',
                                        1000,
                                        'good person 😉.',
                                        1200
                                    ]}
                                    speed={50}
                                    className={style.textTypeing}
                                    repeat={Infinity}
                                />
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className={style.control} style={
                {
                    background: theme === 'light' ? lightColor.controlBG : '',
                    boxShadow: theme === 'light' ? lightColor.controlBoxShadow : ''

                }
            }></div>
            <div className={style.rightContent} style={
                {
                    background: theme === 'light' ? lightColor.bg : '',
                    boxShadow: theme === 'light' ? lightColor.boxShadowInto : ''

                }
            }>
                <UserAvatar />
                <CirclePit left='20px' top='20px' />
                <CirclePit left='20px' bottom='20px' />
                <CirclePit right='20px' top='20px' />
                <CirclePit bottom='20px' right='20px' />
            </div>
        </div>
    )
}


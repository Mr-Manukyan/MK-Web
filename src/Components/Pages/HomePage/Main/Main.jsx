import { BombText } from '../../../Common/BombText/BombText'
import { UserAvatar } from '../../../Common/UserAvatar/UserAvatar'
import { TypeAnimation } from 'react-type-animation';
import style from './Main.module.css'

export const Main = () => {
    return (
        <div className={style.mainContainer}>

            <div className={style.leftContent}>

                <div className={style.leftContentWrapper}>

                    <div className={style.nameWrapper}>
                        <p className={style.infoName}>Hello, my name is`</p>
                        <p className={style.name}>Karen Manukyan</p>
                    </div>

                    <div className={style.professionWrapper}>
                        <p className={style.profession}>I am a</p>
                        <div className={style.professionAnimeWrapper}>

                            <TypeAnimation
                                sequence={[
                                    'Frontend Developer,',
                                    2000,
                                    'UI and UX designer,',
                                    2000,
                                    'just good person 😉.',
                                    2000
                                ]}
                                speed={30}
                                className={style.textTypeing}
                                repeat={Infinity}
                            />
                        </div>
                    </div>
                    {/* 
                    <div className={style.infoTextWrapper}>
                        <p className={style.infoText}>I offer the best projects with high-quality work and beautiful design.</p>
                    </div> */}

                </div>

            </div>

            <div className={style.control}></div>

            <div className={style.rightContent}>
                <UserAvatar />
                <BombText left='20px' top='20px' delay={1} />
                <BombText left='20px' bottom='20px' delay={1} />
                <BombText right='20px' top='20px' delay={1} />
                <BombText bottom='20px' right='20px' delay={1} />
            </div>
        </div>
    )
}


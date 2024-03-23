import { AnimatedPage } from '../../Common/AnimatedPage/AnimatedPage'
import style from './AboutMePage.module.css'

export const AboutMePage = () => {
    return (
        <AnimatedPage>
            <div className={style.container}>
                <div className={style.mainWrapper}>

                    <div className={style.content}>
                        AboutMePage
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}

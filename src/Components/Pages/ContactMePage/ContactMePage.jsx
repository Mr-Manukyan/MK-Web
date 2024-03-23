import { AnimatedPage } from '../../Common/AnimatedPage/AnimatedPage'
import style from './ContactMePage.module.css'

export const ContactMePage = () => {
    return (
        <AnimatedPage>
            <div className={style.container}>
                <div className={style.mainWrapper}>
                    <div className={style.content}>
                        ContactMePage
                    </div>

                </div>
            </div>
        </AnimatedPage>
    )
}

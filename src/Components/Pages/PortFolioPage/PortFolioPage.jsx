import { AnimatedPage } from '../../Common/AnimatedPage/AnimatedPage'
import style from './PortFolioPage.module.css'

export const PortFolioPage = () => {
    return (
        <AnimatedPage>
            <div className={style.container}>
                <div className={style.mainWrapper}>
                    <div className={style.content}>
                        PortFolioPage
                    </div>

                </div>
            </div>
        </AnimatedPage>
    )
}

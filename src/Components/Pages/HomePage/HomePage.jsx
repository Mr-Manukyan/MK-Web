import { Main } from './Main/Main'
import { Footer } from '../../Footer/Footer'
import { AnimatedPage } from '../../Common/AnimatedPage/AnimatedPage'
import style from './HomePage.module.css'


export const HomePage = () => {
    return (
        <AnimatedPage>
            <div className={style.container}>
                <div className={style.mainWrapper}>
                    <Main />
                </div>
            </div>
            <Footer />
        </AnimatedPage>
    )
}




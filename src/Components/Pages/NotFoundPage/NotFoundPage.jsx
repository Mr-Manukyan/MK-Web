import { useTheme } from '../../../Hooks/hooks'
import { AnimatedPage } from '../../Common/AnimatedPage/AnimatedPage'
import style from './NotFound.module.css'

export const NotFoundPage = () => {
    const { theme } = useTheme()
    return (
        <AnimatedPage>
            <div className={style.container}>
                <div className={style.contentContainer} id={theme === 'light' ? style.light : ''}>
                    <h3 className={style.contactParagraph} id={theme === 'light' ? style.lightParagraph : ''}>Page Not Found</h3>
                </div>
            </div>
        </AnimatedPage>
    )
}

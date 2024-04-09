import { AnimatedPage } from '../../Common/AnimatedPage/AnimatedPage'
import { BubblesEffect } from './BubblesEffect/BubblesEffect'
import { useRef, useEffect, useState } from 'react'
import { WebCard } from './WebCard/WebCard'
import { portfolioData } from './portfolioData'
import style from './PortFolioPage.module.css'
import { useTheme } from '../../../Hooks/hooks'

export const PortFolioPage = () => {
    const { theme } = useTheme()
    const [bannerRect, setBannerRect] = useState(null);
    const bannerRef = useRef(null)

    useEffect(() => {
        if (bannerRef.current) {
            setBannerRect(bannerRef.current.getBoundingClientRect());
        }
    }, []);

    return (
        <AnimatedPage>
            <div className={style.container}>
                <div className={style.contentWrapper} id={theme === 'light' ? style.light : ''}>
                    <h3 className={style.webCardParagraph} id={theme === 'light' ? style.lightParagraph : ''}>My Works</h3>
                    <div className={style.webCardContainer} ref={bannerRef}>
                        {bannerRect && <BubblesEffect bannerRect={bannerRect} />}
                        <div className={style.webCardWrapper}>
                            <div className={style.webCardWrapperContent}>
                                {portfolioData.map((data, i) => <WebCard key={i} data={data} custom={i + 1} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}

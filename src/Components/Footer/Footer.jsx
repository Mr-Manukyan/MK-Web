import { SocialButton } from '../Common/SocialButton/SocialButton'
import style from './Footer.module.css'

export const Footer = () => {
    const socialNames = [
        { name: 'facebook', href: 'https://www.facebook.com/karen.manukyan.5832343' },
        { name: 'linkedin', href: 'http://linkedin.com/in/karen-manukyan-a436671b6/' },
        { name: 'github', href: 'http://github.com/MK-Manukyan-Karen' },
        { name: 'twitter', href: '#' },
    ]
    return (

        <div className={style.footerContainer}>
            <div className={style.control}></div>
            <div className={style.footerContent}>
                <div className={style.socialBtnWrapper}>
                    {socialNames.map((item, i) => (
                        <SocialButton name={item.name} href={item.href} key={i} />
                    ))}
                </div>

            </div>

        </div>
    )
}

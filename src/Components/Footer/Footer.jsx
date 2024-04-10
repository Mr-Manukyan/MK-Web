import { useTheme } from '../../Hooks/hooks'
import { SocialButton } from '../Common/SocialButton/SocialButton'
import style from './Footer.module.css'
import { socialNames } from './SocialLinkData'



export const Footer = () => {

    const { theme, lightColor } = useTheme()

    return (

        <div className={style.footerContainer}>
            <div className={style.control} style={
                {
                    background: theme === 'light' ? lightColor.controlBG : '',
                    boxShadow: theme === 'light' ? lightColor.controlBoxShadow : ''

                }
            }></div>
            <div className={style.footerContent} style={
                {
                    background: theme === 'light' ? lightColor.bgFooter : '',
                    boxShadow: theme === 'light' ? lightColor.boxShadowInto : ''

                }
            }>
                <div className={style.socialBtnWrapper}>
                    {socialNames.map((item, i) => (
                        <SocialButton name={item.name} href={item.href} key={i} />
                    ))}
                </div>

            </div>

        </div>
    )
}

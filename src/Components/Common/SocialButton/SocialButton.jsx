import style from './SocialButton.module.css'
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { PiFacebookLogoBold } from "react-icons/pi";
import { AiFillGithub } from "react-icons/ai";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { useTheme } from '../../../Hooks/hooks';

export const SocialButton = ({ name, href }) => {
    const { theme } = useTheme()

    return (

        <div className={style.button} id={theme === 'light' ? style.light : ''}>
            <a href={href} className={style.icon} target="_blank" rel="noreferrer">
                {name === 'linkedin' && <TiSocialLinkedinCircular />}
                {name === 'facebook' && <PiFacebookLogoBold />}
                {name === 'github' && <AiFillGithub />}
                {name === 'twitter' && <TiSocialTwitterCircular />}
            </a>
        </div>
    )
}

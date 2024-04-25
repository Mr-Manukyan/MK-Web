import { motion } from 'framer-motion';
import style from './WebCard.module.css'
import { useTheme } from '../../../../Hooks/hooks';

const cardAnimate = {
    hidden: {
        y: '-100px',
        opacity: 0,
    },
    visible: (custom) => ({
        y: '0px',
        opacity: 1,
        transition: { delay: custom * 0.3, duration: 0.3 }
    })
}

export const WebCard = ({ data, custom }) => {
    const { theme } = useTheme()
    const screenWidthSize = window.innerWidth
    return (
        <motion.div className={style.webCardContainer}
            initial='hidden'
            animate='visible'
            variants={screenWidthSize > 720 ? cardAnimate : null}
            custom={custom}

        >
            <div className={style.webCardContentWrapper} id={theme === 'light' ? style.lightWebCardContentWrapper : ''} >
                <motion.a href={data.href}
                    target="_blank"
                    className={style.webCardWrapper}
                    id={theme === 'light' ? style.lightWebCardWrapper : ''}
                    initial={{ y: 0 }}
                    whileHover={{ y: -20, transition: 0.4 }}
                    exit={{ y: 0 }}
                >
                    <div className={style.imageWrapper} id={theme === 'light' ? style.lightImageWrapper : ''} >
                        <img src={data.img} alt="webSiteImg" className={style.webImg} />
                    </div>
                    <div className={style.textInfoWrapper} id={theme === 'light' ? style.lightTextInfoWrapper : ''} >
                        <p className={style.text} id={theme === 'light' ? style.lightText : ''} >{data.name}</p>
                        <p className={style.description}>{`( ${data.description} )`}</p>
                    </div>
                </motion.a>
            </div>
        </motion.div>
    );
}

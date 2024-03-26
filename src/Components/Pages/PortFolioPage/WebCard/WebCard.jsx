import { motion } from 'framer-motion';
import style from './WebCard.module.css'

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

    return (
        <motion.div className={style.webCardContainer}
            initial='hidden'
            animate='visible'
            variants={cardAnimate}
            custom={custom}

        >
            <div className={style.webCardContentWrapper}>
                <motion.a href={data.href}
                    target="_blank"
                    className={style.webCardWrapper}
                    initial={{ y: 0 }}
                    whileHover={{ y: -50, transition: 0.4 }}
                    exit={{ y: 0 }}
                >
                    <div className={style.imageWrapper}>
                        <img src={data.img} alt="webSiteImg" className={style.webImg} />
                    </div>
                    <div className={style.textInfoWrapper}>
                        <p className={style.text}>{data.name}</p>
                        <p className={style.description}>{`( ${data.description} )`}</p>
                    </div>
                </motion.a>
            </div>
        </motion.div>
    );
}

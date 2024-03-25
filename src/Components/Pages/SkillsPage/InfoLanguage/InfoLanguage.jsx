import style from './InfoLanguage.module.css'

export const InfoLanguage = () => {
    return (
        <div className={style.languageContainer}>

            <div className={style.languageInfoWrapper}>
                <p className={style.language}>English</p>
                <p className={style.starEng}><span>☆☆</span>☆☆☆☆</p>
            </div>
            <div className={style.languageInfoWrapper}>
                <p className={style.language}>Russian</p>
                <p className={style.starRu}><span>☆☆☆☆</span>☆☆</p>
            </div>
            <div className={style.languageInfoWrapper}>
                <p className={style.language}>Armenian</p>
                <p className={style.starArm}>☆☆☆☆☆☆</p>
            </div>

        </div>
    )
}

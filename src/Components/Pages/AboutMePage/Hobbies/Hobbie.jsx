import style from './Hobbie.module.css'

export const Hobbie = ({ hobbie }) => {

    return (
        <div className={style.container}>
            <div className={style.body}>
                <img src={hobbie.img} alt="hobbiesIcon" className={style.hobbieIcon} />
            </div>
            <p className={style.hobbieName}>{hobbie.hobbieName}</p>
        </div>
    )

}

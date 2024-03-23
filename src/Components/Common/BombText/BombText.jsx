import style from './BombText.module.css';

export const BombText = ({ char = 'K', left, right, top, bottom, delay }) => {

    return (
        <div className={style.bump} style={{ left, right, top, bottom, animationDuration: `${delay}s` }}>
            {/* <p className={style.char}>{char}</p> */}
        </div>
    );
};


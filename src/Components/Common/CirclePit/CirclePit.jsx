import { useTheme } from '../../../Hooks/hooks';
import style from './CirclePit.module.css';

export const CirclePit = ({ char = 'K', left, right, top, bottom, delay }) => {
    const { theme, lightColor } = useTheme()
    return (
        <div className={style.circle} style={{
            left, right, top, bottom, animationDuration: `${delay}s`,
            background: theme === 'light' ? lightColor.bg : '',
            boxShadow: theme === 'light' ? lightColor.boxShadowInto : ''
        }}>
            {/* <p className={style.char}>{char}</p> */}
        </div>
    );
};


import { useTheme } from '../../../Hooks/hooks'
import style from './Loading.module.css'


export const Loading = ({ zIndex = 0, name = 'MK' }) => {
  const { theme } = useTheme()
  return (
    <div className={style.container} style={{ zIndex: zIndex }}>
      <div className={style.wrapper}>
        <span className={style.text} id={theme === 'light' ? style.lightText : ''}>{name}</span>
        <div className={style.spinner} id={theme === 'light' ? style.lightSpinner : ''}></div>
      </div>
    </div>
  )
}

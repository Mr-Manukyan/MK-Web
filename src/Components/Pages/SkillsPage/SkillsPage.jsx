import { AnimatedPage } from '../../Common/AnimatedPage/AnimatedPage'
import { TechnicalSkill } from './TechnicalSkill/TechnicalSkill'
import { ProfessionalSkill } from './ProfessionalSkill/ProfessionalSkill'
import { skills } from './skillsData'
import style from './SkillsPage.module.css'
import { InfoLanguage } from './InfoLanguage/InfoLanguage'
import { useTheme } from '../../../Hooks/hooks'


export const SkillsPage = () => {

    const { theme, lightColor } = useTheme()
    const { technicals, professionals } = skills

    return (
        <AnimatedPage>
            <div className={style.container}>
                <div className={style.mainWrapper} style={
                    {
                        background: theme === 'light' ? lightColor.bg : '',
                        boxShadow: theme === 'light' ? lightColor.boxShadowInto : ''

                    }
                }>
                    <div className={style.skillsParagraphWrapper}>
                        <h3 className={style.skillsParagraph} id={theme === 'light' ? style.light : ''}>MY SKILLS</h3>
                    </div>
                    <div className={style.skillsContentWrapper}>
                        <div className={style.skillsContent}>
                            <div className={style.technicalSkillsContent} id={theme === 'light' ? style.lightSkillsContent : ''}>
                                <p className={style.paragraph} id={theme === 'light' ? style.lightParagraph : ''}>Technical</p>
                                <div className={style.technicalSkillsWrapper}>
                                    {technicals.map((skill, i) => (
                                        <TechnicalSkill percentNum={skill.percent} icon={skill.icon} key={i} name={skill.name} />
                                    ))}

                                </div>
                            </div>

                            <div className={style.professionalSkillsContent} id={theme === 'light' ? style.lightSkillsContent : ''}>
                                <p className={style.paragraph} id={theme === 'light' ? style.lightParagraph : ''}>Professional</p>
                                <div className={style.professionalSkillsWrapper}>
                                    {professionals.map((profession, i) => (
                                        <ProfessionalSkill name={profession.name} percentNum={profession.percent} key={i} />
                                    ))}
                                    <div className={style.control} id={theme === 'light' ? style.lightControl : ''} ></div>
                                    <InfoLanguage />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}

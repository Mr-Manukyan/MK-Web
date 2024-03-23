import { AnimatedPage } from '../../Common/AnimatedPage/AnimatedPage'
import { TechnicalSkill } from './TechnicalSkill/TechnicalSkill'
import { ProfessionalSkill } from './ProfessionalSkill/ProfessionalSkill'
import { skills } from './skillsData'

import style from './SkillsPage.module.css'




export const SkillsPage = () => {

    const { technicals, professionals } = skills

    return (
        <AnimatedPage>
            <div className={style.container}>
                <div className={style.mainWrapper}>
                    <div className={style.skillsParagraphWrapper}>
                        <h3 className={style.skillsParagraph}>MY SKILLS</h3>
                    </div>
                    <div className={style.skillsContentWrapper}>
                        <div className={style.skillsContent}>
                            <div className={style.technicalSkillsContent}>
                                <p className={style.paragraph}>Technical</p>
                                <div className={style.technicalSkillsWrapper}>
                                    {technicals.map((skill, i) => (
                                        <TechnicalSkill pracentNum={skill.pracent} icon={skill.icon} key={i} name={skill.name} />
                                    ))}

                                </div>
                            </div>

                            <div className={style.professionalSkillsContent}>
                                <p className={style.paragraph}>Professional</p>
                                <div className={style.professionalSkillsWrapper}>
                                    {professionals.map((profession, i) => (
                                        <ProfessionalSkill name={profession.name} pracentNum={profession.pracent} key={i} />
                                    ))}
                                    <div className={style.control}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}

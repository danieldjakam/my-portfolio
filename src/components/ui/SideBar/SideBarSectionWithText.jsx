import React from 'react'
import SideBarSection from './SideBarSection'
import AdditionalSkill from './AdditionalSkill'
import { getAdditionalSkill } from '../../../functions/additionalSkill'

function SideBarSectionWithText() {
  return (
    <SideBarSection title={"Additional Skills"}>
        {
            getAdditionalSkill().map(skill => <AdditionalSkill text={skill}/>)
        }
        <hr className="w-full mt-4 border border-slate-300 dark:border-slate-400" />
    </SideBarSection>
  )
}

export default SideBarSectionWithText
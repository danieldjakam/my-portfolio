import React from 'react'
import SideBarSection from './SideBarSection'
import AdditionalSkill from './AdditionalSkill'

function SideBarSectionWithText({icon, title, data}) {
  return (
    <SideBarSection title={title}>
        {
            data.map(skill => <AdditionalSkill icon={icon} text={skill}/>)
        }
        <hr className="w-full mt-4 border border-slate-300 dark:border-slate-400" />
    </SideBarSection>
  )
}

export default SideBarSectionWithText
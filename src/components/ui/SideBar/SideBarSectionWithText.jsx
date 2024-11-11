import React from 'react'
import SideBarSection from './SideBarSection'
import AdditionalSkill from './AdditionalSkill'

function SideBarSectionWithText({icon, title, data}) {
  return (
    <SideBarSection title={title}>
        {
            data.map(skill => <AdditionalSkill icon={icon} text={skill}/>)
        }
        <hr className="w-full mt-4 border border-gray-100 dark:border-gray-800" />
    </SideBarSection>
  )
}

export default SideBarSectionWithText
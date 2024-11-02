import React from 'react'
import SectionHeader from './sectionHeader'

function Section({title, description, children}) {
  return (
    <div className='pt-32'>
        <SectionHeader title={title} description={description}/>
        {children}
    </div>
  )
}

export default Section

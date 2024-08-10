import React from 'react'
import SideBarSection from './SideBarSection'
import Percent from './Percent'

function SideBarWithPercent({title, data}) {
  return (
    <SideBarSection title={title}>
        {
            data ? 
                data.map(dat => <Percent key={dat.title} title={dat.title} value={dat.value.toString()} />)
            :  <h5 className='text-slate-400 dark:text-slate-400 '> No {title.toLowerCase()} in db </h5>
        }
        
        <hr className="w-full mt-4 border border-slate-300 dark:border-slate-400" />
    </SideBarSection>
  )
}

export default SideBarWithPercent
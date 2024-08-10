import { ContentCopy } from '@mui/icons-material'
import React from 'react'

function AdditionalSkill({text}) {
  return (
    <div className='flex items-center space-x-2 my-2'>
        <span className='text-primary text-sm'>
            <ContentCopy/>
        </span>
        <span className='text-sm text-slate-400 dark:text-slate-400'>
            {text}
        </span>
    </div>
  )
}

export default AdditionalSkill
import { ContentCopy } from '@mui/icons-material'
import React from 'react'

function AdditionalSkill({text}) {
  return (
    <div>
        <span>
            <ContentCopy/>
        </span>
        <span>
            {text}
        </span>
    </div>
  )
}

export default AdditionalSkill
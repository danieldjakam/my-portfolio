import React from 'react'

function InlineSideBarInfo({text, description, color}) {
  return (
    <div className='flex items-center justify-between text-sm my-2'>
        <span className='bg-primary text-white px-2'>
            {text} :
        </span>
        <span className={`${color ? color : ''}`}>
            {description}
        </span>
    </div>
  )
}

export default InlineSideBarInfo
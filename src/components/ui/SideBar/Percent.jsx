import React from 'react'

function Percent({title, value}) {
  return (
    <div className='w-full my-3'>
        <h5 className='flex justify-between text-sm text-slate-400 dark:text-slate-400 '>
            <span>{title}</span>
            <span>{`${value}%`}</span>
        </h5>
        <div className="w-full py-[1px] px-[1px] mt-1 h-2 border border-primary rounded-sm">
            <div className={`bg-primary h-1 rounded-sm`} style={{width: `${value.toString()}%`}}></div>
        </div>
    </div>
  )
}

export default Percent
import React from 'react'

function GridElement({icon, title, desription}) {
    return (
        <div className='bg-white dark:bg-gray-900 p-4 rounded flex flex-col items-center'>
            <span className='text-primary'>{icon}</span>
            <h3 className='text-medium my-2 font-medium'>{title}</h3>
            <p className='text-center text-sm text-slate-500 dark:text-slate-400'>{desription}</p>
        </div>
    )
}

export default GridElement

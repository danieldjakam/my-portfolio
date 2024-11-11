import React from 'react'

function SectionHeader({title, description}) {
	return (
		<div className='text-center mb-8'>
			<h1 className='text-2xl font-bold text-dark dark:text-white'>{title}</h1>
			<p className='text-sm text-slate-500 dark:text-slate-400 mt-4 w-[450px] mx-auto'>{description}</p>
		</div>
	)
}

export default SectionHeader
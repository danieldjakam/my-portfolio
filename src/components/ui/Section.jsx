import React from 'react'
import SectionHeader from './sectionHeader'

function Section({title, description, children}) {
	return (
		<div className='pt-12 mb-3 text-dark dark:text-white'>
			<SectionHeader title={title} description={description}/>
			{children}
		</div>
	)
}

export default Section

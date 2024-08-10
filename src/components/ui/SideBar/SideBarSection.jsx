import React from 'react'

function SideBarSection({title, children}) {
	return (
		<div className='my-1 w-[80%]'>
			<h3 className='font-bold'>{title}</h3>
			<div className="my-4">
				{children}
			</div>
		</div>
	)
}

export default SideBarSection
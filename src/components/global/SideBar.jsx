import React from 'react'
import Profile from '../ui/Profile'

function SideBar() {
	return (
		<div className='w-[250px] py-4 flex flex-col items-center bg-white dark:bg-gray-900 text-black dark:text-white'>
			<Profile/>
		</div>
	)
}

export default SideBar
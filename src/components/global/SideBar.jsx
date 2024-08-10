import React from 'react'
import Profile from '../ui/Profile'
import InlineSideBarInfo from '../ui/InlineSideBarInfo'

function SideBar() {
	return (
		<div className='w-[300px] py-4 flex flex-col items-center bg-white dark:bg-gray-900 text-black dark:text-white'>
			<Profile/>
			<div className="my-4 w-[80%]">
				<InlineSideBarInfo text="Phone" description="655773402" />
				<InlineSideBarInfo text="Email" description="danidjakam@gmail.com" />
				<InlineSideBarInfo text="Freelance" description="Available" color="text-green-500" />
				<InlineSideBarInfo text="Adress" description="Douala, Cameroun" />
				<hr className="w-full mt-4 border border-slate-300 dark:border-slate-400" />
			</div>
			
		</div>
	)
}

export default SideBar
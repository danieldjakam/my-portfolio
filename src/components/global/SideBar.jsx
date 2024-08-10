import React from 'react'
import Profile from '../ui/SideBar/Profile'
import InlineSideBarInfo from '../ui/SideBar/InlineSideBarInfo'
import SideBarWithPercent from '../ui/SideBar/SideBarWithPercent'
import { getLanguage } from '../../functions/languages'
import { getSkills } from '../../functions/skills'
import SideBarSectionWithText from '../ui/SideBar/SideBarSectionWithText'
import CustomBtn from '../ui/CustomBtn'
import { Download } from '@mui/icons-material'

function SideBar() {		
	return (
		<div className='w-[300px] py-4 flex flex-col items-center bg-white dark:bg-gray-900 text-black dark:text-white overflow-y-scroll scrollbar-none'>
			<Profile/>
			<div className="my-8 w-[80%]">
				<InlineSideBarInfo text="Phone" description="+237691973255" />
				<InlineSideBarInfo text="Email" description="danidjakam@gmail.com" />
				<InlineSideBarInfo text="Freelance" description="Available" color="text-green-500" />
				<InlineSideBarInfo text="Adress" description="Douala, Cameroun" />
				<hr className="w-full mt-4 border border-slate-300 dark:border-slate-400" />
			</div>
			<SideBarWithPercent title="Languages" data={getLanguage()}/>	
			<SideBarWithPercent title={"Skills"} data={getSkills()}/>		
			<SideBarSectionWithText/>
			
			<CustomBtn text={<><Download/> <span className='ml-0.5'>DOWNLOAD CV</span></>} className={'text-sm hover:bg-primary-fonced px-4  text-white font-bold rounded-full transition duration-500 ease-in-out hover:translate-x-2'}/>
		</div>
	)
}

export default SideBar
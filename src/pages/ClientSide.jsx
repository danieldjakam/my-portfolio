import React from 'react'
import SideBar from '../components/global/SideBar'
import RigthBar from '../components/global/RigthBar'
import Home from '../components/Sections/Home'
import Services from '../components/Sections/Services'
import FixedElement from '../components/global/FixedElement'

function ClientSide() {
    return (
        <div className='flex bg-slate-200 dark:bg-slate-800 h-[100vh] overflow-hidden'>
            <SideBar/>
            <div className="main section-width px-4">
                <div className="sticky top-0 h-[auto]  bg-white dark:bg-gray-900 dark:text-white overflow-hidden">
                    <FixedElement/>
                </div>
                <div className="">
                    {/* <Home/> */}
                    <Services/>
                </div>
            </div>
            <RigthBar/>
        </div>
    )
}

export default ClientSide
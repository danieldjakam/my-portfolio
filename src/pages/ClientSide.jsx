import React from 'react'
import SideBar from '../components/global/SideBar'
import RigthBar from '../components/global/RigthBar'
import Services from '../components/Sections/Services'
import FixedElement from '../components/global/FixedElement'
import Recommendations from '../components/Sections/Recommendations'
import Education from '../components/Sections/Education'
import WorkHistory from '../components/Sections/WorkHistory'
import PortFolio from '../components/Sections/PortFolio'

function ClientSide() {
    return (
        <div className='flex bg-slate-200 dark:bg-slate-800 h-[100vh] overflow-hidden'>
            <SideBar/>
            <div className="main section-width px-4">
                <div className=" top-0 h-[auto] bg-white dark:bg-gray-900 dark:text-white overflow-hidden">
                    <FixedElement/>
                </div>
                <div className="">
                    <Services/>
                    <Recommendations/>
                    <Education/>
                    <WorkHistory/>
                    <PortFolio/>
                </div>
            </div>
            <RigthBar/>
        </div>
    )
}

export default ClientSide
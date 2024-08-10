import React from 'react'
import SideBar from '../components/global/SideBar'
import RigthBar from '../components/global/RigthBar'
import Home from '../components/Sections/Home'
import Services from '../components/Sections/Services'

function ClientSide() {
    return (
        <div className='flex bg-slate-200 dark:bg-slate-800 h-[100vh]'>
            <SideBar/>
            <div className="main px-4">
                <Home/>
                <Services/>
            </div>
            <RigthBar/>
        </div>
    )
}

export default ClientSide
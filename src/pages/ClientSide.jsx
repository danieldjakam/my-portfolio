import React from 'react'
import SideBar from '../components/global/SideBar'
import RigthBar from '../components/global/RigthBar'
import Home from '../components/Sections/Home'

function ClientSide() {
    return (
        <div>
            <SideBar/>
            <div className="main">
                <Home/>
            </div>
            <RigthBar/>
        </div>
    )
}

export default ClientSide
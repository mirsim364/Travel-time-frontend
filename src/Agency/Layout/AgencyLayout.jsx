import React from 'react'
import { Outlet } from 'react-router-dom'
import AgencySidebar from '../Sidebar/AgencySidebar'
import './Agencylayout.css'
const AgencyLayout = () => {
  return (
    <div className='aglayout'>
       <AgencySidebar/>
        <div className='aglay'>
          {/* <i><p>WELCOME TO TRAVEL TIME</p></i> */}
          <Outlet/>
        </div>
    </div>
  )
}

export default AgencyLayout

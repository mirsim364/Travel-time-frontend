import React from 'react'
import './AdminLayout.css'

import Adminsidebar from '../../Admin/Sidebar/AdminSidebar'
import { Outlet,Link } from 'react-router-dom'

const AdminLayout = () => {
  
  return (
    <div className='adlayout'>
        <Adminsidebar/>
        <div className='adlay'>
         {/* <i> <p>WELCOME TO TRAVEL TIME</p></i> */}
          <Outlet/>
        </div>
            
      
    </div>
  )
}

export default AdminLayout

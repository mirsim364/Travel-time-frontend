import React from 'react'
import './Adminsider.css'
import { Link, useNavigate } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'

const AdminSidebar = () => {
  // const navigate=useNavigate()
  // let handleLog=()=>{
  //   navigate('/')
  // }
  return (
    <div className='adsidebar'>


       <Link to={'/Admin/AdminUser'}className='adsbbtn'> <Dropdown>
<Dropdown.Toggle className='toggle'>Profile</Dropdown.Toggle>
         <Dropdown.Menu>
           {/* <Dropdown.Item href='#/action-1'>View</Dropdown.Item>  */}
           </Dropdown.Menu> 
          </Dropdown>  </Link>  

      <Link to={'/Admin/AdminProfile'}className='adsbbtn'>
        <Dropdown>
<Dropdown.Toggle id='dropdowm-basic' className='toggle'>User</Dropdown.Toggle>
         <Dropdown.Menu>
          {/* <Dropdown.Item href='#/action-1'>View</Dropdown.Item> */}
          </Dropdown.Menu> 
          </Dropdown>
          </Link>  
     
     
     <Link to={'/Admin/AdminAgency'}> <Dropdown>
<Dropdown.Toggle id='dropdowm-basic'  className='toggle'>Agency </Dropdown.Toggle>
         <Dropdown.Menu>
          {/* <Dropdown.Item href='/Admin/Viewagency'>View</Dropdown.Item> */}
          </Dropdown.Menu> 
          </Dropdown> </Link>  




      <Link to={'/Admin/AdminGuide'}> <Dropdown>
<Dropdown.Toggle id='dropdowm-basic' className='toggle'>Guide</Dropdown.Toggle>
         <Dropdown.Menu>
          {/* <Dropdown.Item href='#/action-1'>View</Dropdown.Item> */}
          </Dropdown.Menu> 
          </Dropdown></Link>


      {/* <Link to={'/Admin/AdminUser'}className='adsbbtn'> <Dropdown>
<Dropdown.Toggle className='toggle'>User</Dropdown.Toggle>
         <Dropdown.Menu>
          {/* <Dropdown.Item href='#/action-1'>View</Dropdown.Item> */}
          {/* </Dropdown.Menu> 
          </Dropdown>  </Link>  */} 


      <Link to={'/Admin/Message'}className='adsbbtn'> <Dropdown>
<Dropdown.Toggle className='toggle'>Message </Dropdown.Toggle>
         <Dropdown.Menu>
          {/* <Dropdown.Item href='#/action-1'>View</Dropdown.Item> */}
          </Dropdown.Menu> 
          </Dropdown> </Link> 


      <Link to={'/Logout'}> <Dropdown>
<Dropdown.Toggle id='dropdowm-basic' className='toggle'>Logout</Dropdown.Toggle>
         <Dropdown.Menu>
          {/* <Dropdown.Item href='#/action-1'>View</Dropdown.Item> */}
          </Dropdown.Menu> 
          </Dropdown></Link>
     
     
       
       
      
    </div>
  )
}

export default AdminSidebar

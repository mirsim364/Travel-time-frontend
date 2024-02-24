import React from 'react'
import './UserLayout.css'
import logo from '../../assests/logo.jpeg'
import { Link, Outlet } from 'react-router-dom';
const UserLayout = () => {
  return (
    <div className='user'>
   <div className="">
    
    <nav className="navbar">
      
      <img style={{width:50}} src={logo} alt="logo" />
        <div className="navdetail">
     
      <Link className='link' to='/user'>              <p className='navdetailList'>Home</p></Link>
      <Link className='link' to='/user/userpackage'>  <p className='navdetailList'>Package</p></Link>
      <Link className='link' to='/user/userhotel'>    <p className='navdetailList'>Hotel</p></Link>
      <Link className='link' to='/user/useragency'>    <p className='navdetailList'>Agency</p></Link>
      <Link className='link' to='/user/userguide'>     <p className='navdetailList'>Guide</p></Link>
      {/* <Link className='link' to='/user/userpackage'>  <p className='navdetailList'>Profile</p></Link> */}
        </div>
      <Link to='/Logout'> <button className="navbtn" >Logout</button></Link>
        {/* <Link to='/Register' ><button className='banbtn'>Join us</button></Link> */}
        
    </nav>
    <Outlet/>
    </div>


<div className="banner"> 
      <span className='banh1'>Explore Exciting Destinations</span>
      <p className='banp'>Plan your next adventure with us</p>
    </div>
    </div>
  )
}

export default UserLayout

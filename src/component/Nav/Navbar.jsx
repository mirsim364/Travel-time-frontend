import React from 'react'
import './navbar.css';
import logo from '../../assests/logo.jpeg'
import { Link, Outlet } from 'react-router-dom';
const Navbar = () => {
  return (
   <div className="">
    
    <nav className="navbar">
      
      <img style={{width:55}} src={logo} alt="logo" />
        <div className="navdetail">
           
           <Link to='/' className='navdetailList'>Home</Link>
           <Link to='/About' className='navdetailList'>About</Link>
            <Link to='/user/userpackage' className='navdetailList'>Packages</Link>
            <Link to='/Contact'className='navdetailList'>Contact</Link>
        </div>
        <div>

       {/* <Link to='/Log'><button className="navbtn" >Login</button></Link> */}
       <Link to='/Adminregister'><button className="navbtn" >ADMIN</button></Link>
       <Link to='/agencyregister'><button className="navbtn" >AGENCY</button></Link>
       {/* <Link to='/Register' ><button className='banbtn'>Join us</button></Link>
         */}
         </div>
    </nav>
    <Outlet/>
    </div>
  )
}

export default Navbar

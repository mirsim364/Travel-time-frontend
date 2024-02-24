import React from 'react'
import './AgencySidebar.css'
import { Link } from 'react-router-dom'
const AgencySidebar = () => {
  return (
    <div className='agsidebar'>
      {/* <Link to='/Agency/AgencyProfile'className='adsb'><button className='toggle1'>Profile</button></Link> */}
      <Link to='/Agency/AgencyPackage'className='adsb'><button className='toggle1'>Package</button></Link>
      
      <Link to='/Agency/AgencyGuide'className='adsb'><button className='toggle1'>Guide</button></Link>
      <Link to='/Agency/Hotel'className='adsb'> <button className='toggle1'>Hotel</button></Link>
      <Link to='/Logout'className='adsb'> <button className='toggle1'>Logout</button></Link>
    </div>
  )
}

export default AgencySidebar

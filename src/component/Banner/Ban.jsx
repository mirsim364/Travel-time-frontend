import React from 'react'
import './bann.css'
import { Link } from 'react-router-dom'

const Ban = () => {
  return (
    
      <div className="banner">
      <span className='banh1'>Welcome to <i>Travel Time</i></span>
      <p className='banp'>Plan your next adventure with us</p>
     <Link to='/Register' ><button className='banbtn'>Join us</button></Link>
    </div>

    
  )
}

export default Ban

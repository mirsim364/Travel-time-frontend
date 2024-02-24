import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {toast}from 'react-toastify'
import './hotel.css'


const Hotel= () => {
  const [hotelData,setHotelData]=useState('')
  const [fetchhotel,setFetchhotel]=useState([''])
  const navigate=useNavigate()
 
  const handleChange = (e) => {
    setHotelData({...hotelData,[e.target.name]:e.target.value})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
      let response =await axios.post('http://localhost:5000/api/hotel/hotellog',hotelData)
      console.log('hotel added',response);
       toast.success('Added successfully');
      e.target.reset()
    }catch(err){
      console.log(err);
    }
  }
  

  let handler=()=>{
    navigate('/agency/viewhotel')
  }

  return (
    <div className='aggu'>
        <form  onSubmit={handleSubmit} className='agguform'action="">
            <b><span className='agguh1'>Hotel</span></b><br /><br />
        
             <TextField onChange={handleChange} className='agguinput' id="outlined-basic" label="Hotel Name" variant="outlined" name='hotelname'/><br />
             <TextField   onChange={handleChange} className='agguinput'id="outlined-basic" label="Phone Number" variant="outlined"name='phonenumber' /><br />
             <TextField onChange={handleChange} className='agguinput' id="outlined-basic" label="Email" variant="outlined" name='email'/><br />
             <TextField   onChange={handleChange} className='agguinput'id="outlined-basic" label="Address" variant="outlined" name='address'/><br />
             <TextField  onChange={handleChange} className='agguinput' id="outlined-basic" label="Service" variant="outlined" name='service'/><br /><br />
             
             <input className='aggubtn' type='submit' value='Add'></input>
             <button className='aggubtnr' onClick={handler} >View</button>
        </form>
      


    </div>
  )
}

export default Hotel

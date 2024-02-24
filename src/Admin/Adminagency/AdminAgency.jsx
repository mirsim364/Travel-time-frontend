import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './AdminAgency.css'
import { TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import{toast} from'react-toastify'

const AdminAgency = () => {

  const [agencyData,setAgencyData]=useState(null)
  const navigate=useNavigate()

  const handleChange = (e) => {
    setAgencyData({
      ...agencyData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try{

      let response =await axios.post('http://localhost:5000/api/agency/agencylog',agencyData)
      console.log(agencyData);
      console.log('agency added',response);
      toast.success('Agency Added')
      e.target.reset()
    }catch(err){
      console.log(err);
    }
  }

  

let handler=()=>{
  navigate('/admin/viewagency')
}


  return (
    <div className='adag'>

        <form  onSubmit={handleSubmit} className='adagform'action="">
            <b><span className='adagh1'>Agency</span></b><br /><br />
        <TextField  onChange={handleChange}className='adaginput' id="outlined-basic" label="Agency Name" variant="outlined" 
        name='agencyname' /><br />
             <TextField onChange={handleChange}  className='adaginput'id="outlined-basic" label="Phone Number" variant="outlined"
             name='phonenumber' /><br />
             <TextField onChange={handleChange} className='adaginput' id="outlined-basic" label="Email" variant="outlined" 
             name='email'/><br />
             <TextField onChange={handleChange} className='adaginput' id="outlined-basic" label="Password" variant="outlined" 
             name='password'/><br /><br />
             <input type='submit'  value='Add'className='adagbtn' />
             <button className='adagbtnr' onClick={handler}>view</button>
        </form>
      <div>

       

      </div>
    </div>
  )
}

export default AdminAgency

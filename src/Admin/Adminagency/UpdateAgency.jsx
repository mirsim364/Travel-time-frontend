import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './AdminAgency.css'
import { TextField } from '@mui/material'
import { useNavigate,useParams } from 'react-router-dom'
import { toast } from 'react-toastify'


const UpdatedAgency = () => {

  const [agencyData,setAgencyData]=useState(null)
  const [error,setError]=useState(null);
  const navigate=useNavigate()

  const {id} = useParams()

  const handleChange = (e) => {
    setAgencyData({
      ...agencyData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = async (e) =>{
    e.preventDefault()
      //  console.log(agencyData,'agencyData');
      //  return true 
    try{
      const response =await axios.put(`http://localhost:5000/api/agency/${id}`,agencyData)
      console.log('updated agency',response)
      toast.success('successfully Updated')
      
    }catch(err){
        if (err.response) {
      setError(err.response.data.message);
    } else {
        setError("An error occurred while updating the agency.");
    }
    }
  }

  

let handler=()=>{
  navigate('/admin/viewagency')
}


  return (
    <div className='adag'>

        <form  onSubmit={handleUpdate} className='adagform'action="">
            <b><span className='adagh1'>Agency</span></b><br /><br />
        <TextField  onChange={handleChange}className='adaginput' id="outlined-basic" label="Agency Name" variant="outlined" 
        name='agencyname' /><br />
             <TextField onChange={handleChange}  className='adaginput'id="outlined-basic" label="Phone Number" variant="outlined"
             name='phonenumber' /><br />
             <TextField onChange={handleChange} className='adaginput' id="outlined-basic" label="Email" variant="outlined" 
             name='email'/><br />
             <TextField onChange={handleChange} className='adaginput' id="outlined-basic" label="Password" variant="outlined" 
             name='password'/><br /><br />
             <input type='submit'  value='Save'className='adagbtn' />
             <button className='adagbtnr' onClick={handler}>Back</button>
        </form>
      <div>

       

      </div>
    </div>
  )
}

export default UpdatedAgency

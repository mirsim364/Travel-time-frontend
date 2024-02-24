import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Profile.css'
import { TextField } from '@mui/material'
import { useNavigate,useParams } from 'react-router-dom'
import { toast } from 'react-toastify'


const Updateprofile = () => {

  const [profileData,setProfileData]=useState(null)
  const [error,setError]=useState(null);
  const navigate=useNavigate()

  const {id} = useParams()

  const handleChange = (e) => {
    setProfileData({...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = async (e) =>{
    e.preventDefault()
      //  console.log(agencyData,'agencyData');
      //  return true 
    try{
        const response =await axios.put(`http://localhost:5000/api/admin/${id}`,profileData)
    
      console.log('updated profile',response)
      toast.success('Updated Successfully')
      e.target.reset()
      
    }catch(err){
        if (err.response) {
      setError(err.response.data.message);
    } else {
        setError("An error occurred while updating the profile.");
    }
    }
  }



let handler=()=>{
  navigate('/admin/adminprofile')
}


  return (
    <div className='adgu'>

<form  onSubmit={handleUpdate}  className='adguform'action="">
            <b><span className='adguh1'>User Details</span></b><br /><br />
        <TextField onChange={handleChange} className='adguinput' id="outlined-basic" label="Username" variant="outlined"name='username' /><br />
             <TextField onChange={handleChange}  className='adguinput'id="outlined-basic" label="Password" variant="outlined"name='password' /><br />
             
             <TextField onChange={handleChange} className='adguinput' id="outlined-basic" label="Email" variant="outlined"name='email' /><br /><br />
             
             <input type='submit'  value='Save'className='adgubtn' />
             <button className='adgubtnr' onClick={handler}>Back</button>
        </form>
     
    </div>
  )
}

export default Updateprofile

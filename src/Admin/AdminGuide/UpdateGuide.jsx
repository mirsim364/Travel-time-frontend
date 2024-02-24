import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Adminguide.css'
import { TextField } from '@mui/material'
import { useNavigate,useParams } from 'react-router-dom'
import { toast } from 'react-toastify'


const UpdatedGuide = () => {

  const [guideData,setGuideData]=useState(null)
  const [error,setError]=useState(null);
  const navigate=useNavigate()

  const {id} = useParams()

  const handleChange = (e) => {
    setGuideData({
      ...guideData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = async (e) =>{
    e.preventDefault()
      //  console.log(agencyData,'agencyData');
      //  return true 
    try{
        const response =await axios.put(`http://localhost:5000/api/guide/${id}`,guideData)
    
      console.log('updated guide',response)
      toast.success('Updated successfully')
      
    }catch(err){
        if (err.response) {
      setError(err.response.data.message);
    } else {
        setError("An error occurred while updating the guide.");
    }
    }
  }



let handler=()=>{
  navigate('/admin/viewguide')
}


  return (
    <div className='adgu'>

<form  onSubmit={handleUpdate}  className='adguform'action="">
            <b><span className='adguh1'>Guide</span></b><br /><br />
        <TextField onChange={handleChange} className='adguinput' id="outlined-basic" label="Guide Name" variant="outlined"name='guidename' /><br />
             <TextField onChange={handleChange}  className='adguinput'id="outlined-basic" label="Phone Number" variant="outlined"name='phonenumber' /><br />
             <TextField onChange={handleChange}  className='adguinput'id="outlined-basic" label="Place" variant="outlined"name='place' /><br />
             <TextField onChange={handleChange}  className='adguinput'id="outlined-basic" label="Language" variant="outlined"name='language' /><br />
             
             <TextField onChange={handleChange} className='adguinput' id="outlined-basic" label="Email" variant="outlined"name='email' /><br /><br />
             
             <input type='submit'  value='Save'className='adgubtn' />
             <button className='adgubtnr' onClick={handler}>Back</button>
        </form>
     
    </div>
  )
}

export default UpdatedGuide

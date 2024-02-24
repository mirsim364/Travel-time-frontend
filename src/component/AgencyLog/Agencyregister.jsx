import React, { useState } from 'react'
import{TextField} from '@mui/material'
import { useNavigate,Link } from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-toastify'


const Agencyregister = () => {
  const navigate=useNavigate()
  const [datas,setDatas]=useState('')


  let handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      let response=await axios.post('http://localhost:5000/api/user/regi',datas)
      console.log(response.data,'response');
      toast.success('registered successfully')
      navigate('/AgencyLogin')
    }catch(error){
      console.log(error);
    }
  }


  let handleChange=(e)=>{
    setDatas({...datas,[e.target.name]:e.target.value})
  }
  console.log(datas);

  return (
    <section>
    <div className='logi1'>
      
      <form onSubmit={handleSubmit} className='logi'>
       <b><span className='logh1'><i>Travel</i><span className='logh2'> TIME</span></span></b>
       <div className='log1box'>
      <TextField onChange={handleChange} id="outlined-basic" label="Username" variant="outlined"name='username' /><br />
             <TextField onChange={handleChange} id="outlined-basic" label="Password" variant="outlined"name='password' /><br />
             <TextField onChange={handleChange}id="outlined-basic" label="Email" variant="outlined"name='email' /><br /><br />
             <button className='logbtn' >Register</button>
              <Link to='/AgencyLogin'><button className='logbtn' >Login</button></Link>
            </div>  
            
          
      </form>

    </div>
    </section>
  )
}

export default Agencyregister

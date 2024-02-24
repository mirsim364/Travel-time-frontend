import React, { useState } from 'react'
import './adregister.css'
import{TextField} from '@mui/material'
import { useNavigate,Link } from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-toastify'


const Adminregister = () => {
  const navigate=useNavigate()
  const [data,setData]=useState('')


  let handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      let response=await axios.post('http://localhost:5000/api/user/reg',data)
      console.log(response.data,'response');
      toast.success('registered successfully')
      navigate('/AdminLogin')
    }catch(error){
      console.log(error);
    }
  }


  let handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  console.log(data);

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
              <Link to='/AdminLogin'><button className='logbtn' >Login</button></Link>
            </div>  
            
          
      </form>

    </div>
    </section>
  )
}

export default Adminregister

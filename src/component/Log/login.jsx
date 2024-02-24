import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate ,Link} from 'react-router-dom'
import image3 from '../../assests/logi.jpg'
import './Logi.css'
import{TextField} from '@mui/material'




const Login = () => {
  const navigate=useNavigate()
  const [data,setData]=useState('')


  let handleSubmit=async (e)=>{
    e.preventDefault()
    try{
      let response= await axios.post('http://localhost:5000/api/admin/login',data)
      console.log(response.data,'response');
      navigate('/AdminProfile')
    }catch(error){
      console.log(error);
    }
  }

let handleChange=(e)=>{
  setData({...data,[e.target.name]:e.target.value})
}
console.log(data);

  return (
    <section className=''>
    <div className='log'>
      <img style={{ width:700,height:650}}src={image3} alt="side1" />
      <form onSubmit={handleSubmit} className='log1'>
       <b><span className='logh1'><i>Travel</i><span className='logh2'> TIME</span></span></b>
       <div className='logbox'>
        <TextField  onChange={handleChange}id="outlined-basic" label="Username" variant="outlined"  /><br />
        <TextField  onChange={handleChange} id="outlined-basic" label="Password" variant="outlined"  /><br />
             
        <Link to='/user' >   <button className='logbtn' >Login</button></Link>
            </div>  
            
          
      </form>

    </div>
    </section>
  )
}

export default Login

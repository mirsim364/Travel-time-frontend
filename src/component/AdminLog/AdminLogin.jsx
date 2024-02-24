import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate ,Link} from 'react-router-dom'
import{TextField} from '@mui/material'




const AdminLogin = () => {
  const navigate=useNavigate()
  const [data,setData]=useState('')


  let handleSubmit=async (e)=>{
    e.preventDefault()
    try{
      let response= await axios.post('http://localhost:5000/api/admin/login',data)
      console.log(response.data,'response');
      navigate('/Admin')
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
    <div className='logi1'>
      
      <form onSubmit={handleSubmit} className='logi'>
       <b><span className='logh1'><i>Travel</i><span className='logh2'> TIME</span></span></b>
       <div className='log1box'>
        <TextField  onChange={handleChange}id="outlined-basic" label="Username" variant="outlined"  /><br />
        <TextField  onChange={handleChange} id="outlined-basic" label="Password" variant="outlined"  /><br />
             
        <Link to='/Admin' >   <button className='logbtn' >Login</button></Link>
            </div>  
            
          
      </form>

    </div>
    </section>
  )
}

export default AdminLogin

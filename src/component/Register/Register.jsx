import React, { useState } from 'react'
import image3 from '../../assests/logi.jpg'
import './Register.css'
import{TextField} from '@mui/material'
import { useNavigate,Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'


const Register = () => {
  const navigate=useNavigate()
  const [data,setData]=useState('')
// const [error,setError]=useState(null)

  let handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      let response=await axios.post('http://localhost:5000/api/admin/register',data)
      console.log(response.data,'response');
      toast.success('Registered successfully')
      // alert('registered successfully')
      navigate('/Log')
    }catch(error){
      console.log(error);
      
      // toast.error(error.reponse.data.message)
    }
    // toast.error(error.reponse.data.message)
  }


  let handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  console.log(data);

  return (
    <section>
    <div className='log'>
      <img style={{ width:700,height:650}}src={image3} alt="side1" />
      <form onSubmit={handleSubmit} className='log1'>
       <b><span className='logh1'><i>Travel</i><span className='logh2'> TIME</span></span></b>
       <div className='logbox'>
      <TextField onChange={handleChange} id="outlined-basic" label="Username" variant="outlined"name='username' /><br />
             <TextField onChange={handleChange} id="outlined-basic" label="Password" variant="outlined"name='password' /><br />
             <TextField onChange={handleChange}id="outlined-basic" label="Email" variant="outlined"name='email' /><br /><br />
             <button className='logbtn' >Register</button>
          <Link to='/Log'>   <button className='logbtn' >Login</button></Link>
            </div>  
            
          
      </form>

    </div>
    </section>
  )
}

export default Register

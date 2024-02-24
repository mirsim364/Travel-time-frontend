import React ,{useState,useEffect}from 'react'
import { TextField } from '@mui/material'
import './Adminguide.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'



const AdminGuide = () => {


  const [guideData,setGuideData]=useState('')
  const navigate=useNavigate()

  const handleChange = (e) => {
    setGuideData({...guideData,[e.target.name]:e.target.value})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
      let response =await axios.post('http://localhost:5000/api/guide/guidelog',guideData)
      console.log('guide added',response.data);
      toast.success('Guide Added')
      e.target.reset()
    }catch(err){
      console.log(err);
    }
  }

  let handler=()=>{
    navigate('/admin/viewguide')
  }

  return (
    <div className='adgu'>
        <form  onSubmit={handleSubmit}  className='adguform'action="">
            <b><span className='adguh1'>Guide</span></b><br /><br />
        <TextField onChange={handleChange} className='adguinput' id="outlined-basic" label="Guide Name" variant="outlined"name='guidename' /><br />
             <TextField onChange={handleChange}  className='adguinput'id="outlined-basic" label="Phone Number" variant="outlined"name='phonenumber' /><br />
             <TextField onChange={handleChange}  className='adguinput'id="outlined-basic" label="Place" variant="outlined"name='place' /><br />
             <TextField onChange={handleChange}  className='adguinput'id="outlined-basic" label="Language" variant="outlined"name='language' /><br />
             
             <TextField onChange={handleChange} className='adguinput' id="outlined-basic" label="Email" variant="outlined"name='email' /><br /><br />
             <input type='submit' className='adgubtn' value='Add'></input>
             <button className='adgubtnr' onClick={handler}>View</button>
        </form>
        <div>

</div>
</div>
    
  )
}

export default AdminGuide


import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { TextField } from '@mui/material'
import './Agencyguide.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const AgencyGuide = () => {
  const [guideData,setGuideData]=useState('')
  const [fetchguidename,setFetchguidename]=useState([''])
  const navigate=useNavigate()

  const handleChange = (e) => {
    setGuideData({...guideData,[e.target.name]:e.target.value})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
      console.log('guideData:',guideData);
      let response =await axios.post('http://localhost:5000/api/guide/guidelog',guideData)
      console.log('guide added',response);
      toast.success('Added Successfully')
      e.target.reset()
    }catch(err){
      console.log(err);
    }
  }

  const handleDelete = async (id,e) =>{
    e.preventDefault()
    try{
      let response =await axios.delete(`http://localhost:5000/api/agency/Agencyguide/delete/${id}`)
      console.log('deleted guide',response)
      toast.success('Deleted Successfully')
    }catch(err){
      console.log(err);
    }
  }

  // useEffect(()=>{
  //   let fetchagencyguide= async()=>{
  //     try{
  //       let response=await axios.get('http://localhost:5000/api/agency/Agencyguide/find')
  //       console.log('fetched guide',response);
  //       setFetchguidename(response.data)
  //     }catch(err){
  //       console.log(err);
  //     }
  //   }
  //   fetchagencyguide()
  // },[])
  let handler=()=>{
    navigate('/agency/Viewguide')
  }

  return (
    <div className='aggu'>
        <form  onSubmit={handleSubmit} className='agguform'action="">
            <b><span className='agguh1'>Guide</span></b><br /><br />
        <TextField onChange={handleChange} className='agguinput' id="outlined-basic" label="Guide Name" variant="outlined" name='guidename'/><br />
             <TextField   onChange={handleChange} className='agguinput'id="outlined-basic" label="Phone Number" variant="outlined"name='phonenumber' /><br />
             <TextField   onChange={handleChange} className='agguinput'id="outlined-basic" label="Place" variant="outlined"name='place' /><br />
             <TextField   onChange={handleChange} className='agguinput'id="outlined-basic" label="Language" variant="outlined"name='language' /><br />
             
             <TextField  onChange={handleChange} className='agguinput' id="outlined-basic" label="Email" variant="outlined" name='email'/><br /><br />
             <input className='aggubtn' type='submit' value='Add'></input>
             <button className='aggubtnr' onClick={handler} >View</button>
        </form>
        <div>

{/* {fetchguidename.map((item)=>(
  <>
  <p>{item.guidename}</p>
  <p>{item.phonenumber}</p>
  <p>{item.email}</p>
  {/* <button className='aggubtnr' onClick={(e)=>handleDelete(item._id,e)}>Delete</button> */}


</div>
    </div>
  )
}

export default AgencyGuide


import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { TextField } from '@mui/material'
import './AgencyPackage.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const AgencyPackage = () => {

  const [packageData,setPackageData]=useState('')
  const [fetchpackagename,setFetchpackagename]=useState([''])
  const navigate=useNavigate()

  const handleChange = (e) => {
    setPackageData({...packageData,[e.target.name]:e.target.value})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
      let response =await axios.post('http://localhost:5000/api/package/packagelog',packageData)
      console.log('package added',response);
      toast.success('Package Added')
      e.target.reset()
    }catch(err){
      console.log(err);
    }
  }

  const handleDelete = async (id,e) =>{
    e.preventDefault()
    try{
      let response =await axios.delete(`http://localhost:5000/api/package/delete/${id}`)
      console.log('deleted package',response)
      toast.success('Deleted Successfully')
    }catch(err){
      console.log(err);
    }
  }

  
  let handler=()=>{
    navigate('/agency/viewpackage')
  }

  return (
    <div className='agpa'>
      <b><span className='agpah1'>Package</span></b><br /><br />
        <form onSubmit={handleSubmit}  className='agpaform'action="">
            
            <TextField onChange={handleChange}   className='agpainput'id="outlined-basic" label="Package Name" variant="outlined"name='packagename' /><br />
             
        <TextField onChange={handleChange}  className='agpainput' id="outlined-basic" label="Place" variant="outlined"name='place' /><br />
             <TextField onChange={handleChange}   className='agpainput'id="outlined-basic" label="Number of days" variant="outlined"name='numberofday' /><br />
             <TextField onChange={handleChange}  className='agpainput' id="outlined-basic" label="Price" variant="outlined" name='price'/><br />
             <TextField onChange={handleChange}  className='agpainput' id="outlined-basic" label="Number of person" variant="outlined" name='numberofperson'/><br />
             <TextField onChange={handleChange}   className='agpainput'id="outlined-basic" label="Phone Number" variant="outlined"name='phonenumber' /><br />
             <TextField onChange={handleChange}   className='agpainput'id="outlined-basic" label="Email" variant="outlined"name='email' /><br /><br/>
             
             <input className='agpabtn' type='submit' value='Add'></input>
             {/* <button className='agpabtn' >Add</button> */}
             <button className='agpabtnr'  onClick={handler}>View</button>
        </form>
        <div>

{/* {fetchpackagename.map((item)=>(
  <>
  <p> PACKAGE NAME :{item.packagename}</p>
  <p> PHONE NUMBER :{item.phonenumber}</p>
  <p> EMAIL :{item.email}</p>
  <p> PLACE :{item.place}</p>
  <p> NUMBER OF DAY{item.numberofdays}</p>
  <p> PRICE{item.price}</p>
  <p>NUMBER OF PERSON{item.numberofperson}</p>
  {/* <button className='agpabtnr' onClick={(e)=>handleDelete(item._id,e)}>Delete</button> */}


</div>
    </div>
  )
}

export default AgencyPackage

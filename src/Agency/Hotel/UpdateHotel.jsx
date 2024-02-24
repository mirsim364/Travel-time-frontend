import React,{useState} from 'react'
import axios from 'axios'
import './hotel.css'
import { TextField } from '@mui/material'
import{useNavigate,useParams}from 'react-router-dom'
import { toast } from 'react-toastify'

const UpdateHotel = () => {

    const[hotelData,setHotelData]=useState(null)
    const[error,setError]=useState(null)
    const navigate=useNavigate()

    const {id} = useParams()
  
    const handleChange = (e) => {
      setHotelData({
        ...hotelData,
        [e.target.name]: e.target.value
      });
    };


    const handleUpdate = async (e) =>{
        e.preventDefault()
          //  console.log(agencyData,'agencyData');
          //  return true 
        try{
            const response =await axios.put(`http://localhost:5000/api/hotel/${id}`,hotelData)
        
          console.log('updated hotel',response)
          toast.success('Updated Successfully')
          e.target.reset()
          
        }catch(err){
            if (err.response) {
          setError(err.response.data.message);
        } else {
            setError("An error occurred while updating the hotel.");
        }
        }
      }


      let handler=()=>{
        navigate('/agency/viewhotel')
      }


  return (
    
      <div className='aggu'>
        <form  onSubmit={handleUpdate} className='agguform'action="">
            <b><span className='agguh1'>Hotel</span></b><br /><br />
        
             <TextField onChange={handleChange} className='agguinput' id="outlined-basic" label="Hotel Name" variant="outlined" name='hotelname'/><br />
             <TextField   onChange={handleChange} className='agguinput'id="outlined-basic" label="Phone Number" variant="outlined"name='phonenumber' /><br />
             <TextField onChange={handleChange} className='agguinput' id="outlined-basic" label="Email" variant="outlined" name='email'/><br />
             <TextField   onChange={handleChange} className='agguinput'id="outlined-basic" label="Address" variant="outlined" name='address'/><br />
             <TextField  onChange={handleChange} className='agguinput' id="outlined-basic" label="Service" variant="outlined" name='service'/><br /><br />
             <input type='submit'  value='Save'className='adgubtn' />
             <button className='adgubtnr' onClick={handler}>Back</button>
        </form>
    </div>
  )
}

export default UpdateHotel

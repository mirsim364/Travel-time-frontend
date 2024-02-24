import React,{useState} from 'react'
import axios from 'axios'
import './AgencyPackage.css'
import { TextField } from '@mui/material'
import{useNavigate,useParams}from 'react-router-dom'
import { toast } from 'react-toastify'

const Updatepackage = () => {

    const[packageData,setPackageData]=useState(null)
    const[error,setError]=useState(null)
    const navigate=useNavigate()

    const {id} = useParams()
  
    const handleChange = (e) => {
      setPackageData({
        ...packageData,
        [e.target.name]: e.target.value
      });
    };


    const handleUpdate = async (e) =>{
        e.preventDefault()
          //  console.log(agencyData,'agencyData');
          //  return true 
        try{
            const response =await axios.put(`http://localhost:5000/api/package/${id}`,packageData)
        
          console.log('updated package',response)
          toast.success('Upated Successfully')
          e.target.reset()
          
        }catch(err){
            if (err.response) {
          setError(err.response.data.message);
        } else {
            setError("An error occurred while updating the package.");
        }
        }
      }


      let handler=()=>{
        navigate('/agency/viewpackage')
      }


  return (
    
    <div className='agpa'>
    <b><span className='agpah1'>Package</span></b><br /><br />
      <form onSubmit={handleUpdate}  className='agpaform'action="">
          
          <TextField onChange={handleChange}   className='agpainput'id="outlined-basic" label="Package Name" variant="outlined"name='packagename' /><br />
           
      <TextField onChange={handleChange}  className='agpainput' id="outlined-basic" label="Place" variant="outlined"name='place' /><br />
           <TextField onChange={handleChange}   className='agpainput'id="outlined-basic" label="Number of days" variant="outlined"name='numberofday' /><br />
           <TextField onChange={handleChange}  className='agpainput' id="outlined-basic" label="Price" variant="outlined" name='price'/><br />
           <TextField onChange={handleChange}  className='agpainput' id="outlined-basic" label="Number of person" variant="outlined" name='numberofperson'/><br />
           <TextField onChange={handleChange}   className='agpainput'id="outlined-basic" label="Phone Number" variant="outlined"name='phonenumber' /><br />
           <TextField onChange={handleChange}   className='agpainput'id="outlined-basic" label="Email" variant="outlined"name='email' /><br /><br/>
           
             <input type='submit'  value='Save'className='adgubtn' />
             <button className='adgubtnr' onClick={handler}>Back</button>
        </form>
    </div>
  )
}

export default Updatepackage

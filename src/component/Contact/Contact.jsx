import React,{useState}from 'react'
import './contact.css'
import fb from '../../assests/fb.png'
import twitter from '../../assests/twitter.jpg'
import utube from '../../assests/utube.png'
import insta from '../../assests/instagram.jpg'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Contact = () => {


  
  const [data,setData]=useState('')
const [clear,setClear]=useState(null)

  let handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      let response=await axios.post('http://localhost:5000/api/message/messagelog',data)
      console.log(response.data,'response');
      toast.success('message sended')
    e.target.reset()
    }catch(error){
      console.log(error);
    }
  }


  let handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  console.log(data);






  return (
   <section className='contactpg'>
    <div id='contact'>
    <i><b><p className='coh1'>CONTACT US</p></b></i>
    <span className='cop'>Please fill out the form below to discuss more plans</span>
    <form className='coform' onSubmit={handleSubmit}>
        <input type='text'onChange={handleChange} className='name' placeholder='Your Name' name='name'></input>
<input type='email'onChange={handleChange} className='email' placeholder ='Your Email' name='email'/>
<textarea onChange={handleChange}className='msg' rows={5} placeholder='Your Message'name ='message'></textarea><br />
<button className='btnco'>Submit</button><br /><br />





<div className='coimg'>
    <img src={fb} alt="fb" className='social' />
    <img src={twitter}alt="twitt" className='social' />
    <img src={utube} alt="utube"  className='social'/>
    <img src={insta} alt="insta"  className='social'/>

</div>
    </form>
    </div>
   </section>
  )
}

export default Contact

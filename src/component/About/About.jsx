import React from 'react'
import './about.css'
import  image1 from'../../assests/side3.jpeg'
import  image2 from'../../assests/side2.jpeg'
const About = () => {
  return (
    <div className='ab'>

     <i><b><p className='abh1'>ABOUT US</p></b></i>
     
     <div className='abimg'>
      
    
      <p className='abp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, assumenda deserunt voluptatibus
       saepe maxime dolore molestias! Aut
      quia est tenetur veniam voluptates blanditiis dolores at veritatis, expedita earum? Rem, est!</p>
      
      <img style={{width:300, height:400, borderRadius:15}} src={image1} alt=" side1" />
      <img style={{width:300,height:400,borderRadius:15}} src={image2} alt="side2" />
      
      </div>
    </div>
  )
}

export default About

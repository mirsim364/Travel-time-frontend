import React from 'react'
import './image.css'
import img1 from '../../assests/img1.jpeg'
import img2 from '../../assests/img2.jpeg'
import img3 from '../../assests/img3.jpeg'
import img4 from '../../assests/img4.jpeg'
import img5 from '../../assests/img5.jpeg'
import img6 from '../../assests/img6.jpeg'
import img7 from '../../assests/img7.jpeg'
import img8 from '../../assests/img8.jpeg'
const Image = () => {
  return (
    
   
    <div className='imgpg'>
<i><b><p className='imgh1'>IMAGES</p></b></i>
<div className='imgp'>
      <img src={img1} alt="img1" className='imgpo' />
      <img src={img2} alt="img2" className='imgpo'/>
      <img src={img3} alt="img3" className='imgpo'/>
      <img src={img4} alt="img4" className='imgpo'/>
      <img src={img5} alt="img5"className='imgpo' />
      <img src={img6} alt="img6" className='imgpo'/>
      <img src={img7} alt="img7" className='imgpo'/>
      <img src={img8} alt="img8" className='imgpo'/>
    </div>
    </div>

    
  )
}

export default Image

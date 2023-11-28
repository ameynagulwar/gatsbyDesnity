import React from 'react'
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
function PhoneImage() {
  return (
    <div className='phoneImage'>
        <img src={img2} width={'270px'} height={'500px'}/>
        <img src={img1} width={'270px'} height={'500px'}/>
        <img src={img4} width={'270px'} height={'500px'}/>
    </div>
  )
}

export default PhoneImage
import React from 'react'
import Vision from "../assets/Visionaries.png"

function Visionaries() {
  return (
    <div className='vision'>
        <div className='visionText'>
           <span>Meet the<span id='future' className='vi'>Visionaries</span><br></br>behind Density.</span>
       </div>
       <img src={Vision} id='visionI'/>
    </div>
  )
}

export default Visionaries
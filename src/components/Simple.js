import React from 'react'
import simpleimage from "../assets/simpleImage.png"

function Simple() {
  return (
    <div className='simple'>
        <div className='simpleText'>
           <span>Derivate made simple<br></br>in<span id='future'> 3 Easy</span>steps.</span>
       </div>
       <div>
           <img src={simpleimage}/>
       </div>
    </div>
  )
}

export default Simple
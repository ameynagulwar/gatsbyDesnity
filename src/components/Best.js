import React from 'react'
import best from '../assets/best.png'
function Best() {
  return (
    <div className='best'>
        <div className='bestText'>
           <span>Backed by the Best.</span>
       </div>
       <img src={best} id='bestI'/>
    </div>
  )
}

export default Best
import React from 'react'
import card1 from "../assets/card1.png"
import card2 from "../assets/card2.png"
import card3 from "../assets/card3.png"

function Cards() {
  return (
    <div className='deposit'>
        <div className='depositText'>
           <span>Don't take our words for it.</span>
           <p>Hear it from our export community of traders who have made<br></br>insans amount in short period of time.</p>
       </div>
       <div className='cardImage'>
           <img src={card1}/>
           <img src={card2}/>
           <img src={card3}/>
       </div>
    </div>
  )
}

export default Cards
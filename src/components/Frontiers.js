import React from 'react'
import FrontierGraph from "../assets/FrontierGraph.png"

function Frontiers() {
  return (
    <div className='marketF'>
         <div className='marketFront'>
             <span><span id='future'>Unlock</span> New Frontiers.</span>
             <p>Are you a Stock Trader Looking for new opportunities to make<br></br>money? We got you covered!</p>
        </div>
        <div className='mainInfo'>
            <div>
                <p className='infoP'>Same</p>
                <p className='fr'>Strategies</p>
            </div>
            <div>
                <p className='infoP'>Same</p>
                <p className='fr'>Indicator</p>
            </div>
            <div>
                <p className='infoP'>Better</p>
                <p className='fr'>Levrage</p>
            </div>
            <div >
                <p className='infoP'>24 x 7</p>
                <p className='fr'>Trading</p>
            </div>
        </div>
        <img src={FrontierGraph} width={"800px"} marginTop={"30px"}/>
    </div>
  )
}

export default Frontiers
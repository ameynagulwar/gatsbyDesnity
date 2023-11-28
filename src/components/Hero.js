import React from 'react'
import mainPhone from "../assets/Main.png.png"

function Hero() {
  return (
    <div className='main'>
        <div className='mainText'>
             <span>It's time to trade,<br></br>the <span id='future'>future.</span></span>
             <p>Trade BTC, ETC Futures with 125x Leverage and Earn Rewards.</p>
        </div>
        <div className='mainImage'>
             <img id='image' src={mainPhone} width={"600px"} height={"500px"}/>
        </div>
        <div className='mainInfo'>
            <div>
                <p className='infoP'>00%</p>
                <p>conversion fees</p>
            </div>
            <div>
                <p className='infoP'>500 Mn+</p>
                <p>Lifetime Volumne Traded</p>
            </div>
            <div>
                <p className='infoP'>250+</p>
                <p>Total Tradable Pairs</p>
            </div>
            <div >
                <p className='infoP'>15000+</p>
                <p>Traders</p>
            </div>
        </div>
    </div>
  )
}

export default Hero

import React from 'react'
import Graph from '../assets/Graph.png'

function ExploreMarket() {
  return (
    <div className='expMarket'>
         <div className='market'>
             <span>Explore the Markets<br></br>Like it is your<span id='future'> Playground.</span></span>
             <p>search for your favorite coins and stay ahead of market</p>
        </div>
        <img src={Graph}/>
    </div>
  )
}

export default ExploreMarket
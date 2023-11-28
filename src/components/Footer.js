import React from 'react'
import insta from '../assets/insta.png'
import face from '../assets/face.png'
import tweet from '../assets/tweet.png'
import link from '../assets/link.png'
import densityLogo from '../assets/densityLogo.png'
function Footer() {
  return (
    <div className='footer'>
        <div className='name'>
            <img src={densityLogo}/>
            <span>density</span>
        </div>
        <div className='flist'>
            <span>Blog</span>
            <span>Fees</span>
            <span>Leaderboard</span>
            <span>Careers</span>
            <span>Contact Us</span>
            <span>Private Policy</span>
        </div>
        <div className='ftext'>
            <p>Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i <br></br>muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde. </p>
        </div>
        <div className='icons'>
            <img src={face}/>
            <img src={tweet}/>
            <img src={link}/>
            <img src={insta}/>
        </div>
    </div>
  )
}

export default Footer
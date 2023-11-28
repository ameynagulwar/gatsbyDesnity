import React from 'react'
function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftNav'>
            <span>density</span>
        </div>
        <div className='rightNav'>
            <span>Career</span>
            <span>Blog</span>
            <span>Leaderboard</span>
            <span>Fees</span>
            <button>Trade Now</button>
        </div>
    </div>
  )
}

export default Navbar
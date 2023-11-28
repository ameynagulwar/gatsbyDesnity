import React from 'react'
import depBonus from "../assets/Depbonus.png"
import depRel from "../assets/DepRel.png"
function Deposit() {
  return (
    <div className='deposit'>
       <div className='depositText'>
           <span>Start Small. Earn Big.</span>
           <p>Deposit a minimum of 1000 and get Deposit Bonus+<br></br>dedicated relationship manger.</p>
       </div>
       <div className='depImage'>
          <img src={depBonus} width={'500px'}/>
          <img src={depRel} width={'500px'}/>
       </div>
    </div>
  )
}

export default Deposit
import React from 'react'
import cardImage from "../assets/cardImage.png"
import ImageText from "../assets/ImageText.png"
function EarnMoney() {
  return (
    <div className='earn'>
        <img src={cardImage} height={"900px"}/>
        <img src={ImageText}  width={"1000px"} height={"600px"}/>
    </div>
  )
}

export default EarnMoney
import React from 'react'
import "./Hero.css"
import hand from "../../assets/hand-icon.png"
import arrow from "../../assets/arrow_icon.png"
import men from "../../assets/men.webp"
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
<h2>Best Deals !   Best Prices !</h2>
       
        <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand} alt="" height="60px" />
        </div>
        <p>collections</p>
        <p>for everyone</p>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow} alt="" height="30px"/>
        
        </div>
        
        </div>
        
        <div className="hero-right">
  <img src={men} alt="" height="320px" />
        </div>
    </div>
  )
};

export default Hero;
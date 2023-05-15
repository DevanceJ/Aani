import React from 'react'
import hero from '../Assets/Hero/hero.png'
import './Hero.css'
const Hero = () => {
  return (
    <div className="heroSection">
        <img className='imgMain' src={hero} alt="" />
        <div className="heroText">
            <h1>the autumn equinox</h1>
            <p>Fall has arrived.<br/>
            Shop for our new releases starting today.</p>
            <button className='shopBtn'>Shop Now</button>
        </div>
    </div>
  )
}

export default Hero
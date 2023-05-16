import {useEffect, useState} from 'react'
import hero from '../Assets/Hero/hero.png'
import mobile from '../Assets/Hero/heroMobile.png'
import './Hero.css'
const Hero = () => {
  const [windowWidth, setWindowWidth] = useState([window.innerWidth]);
  useEffect(() => {
    const handleWidth = () => {
      setWindowWidth([window.innerWidth]);
    };
    window.addEventListener('resize', handleWidth);
    return () => {
      window.removeEventListener('resize', handleWidth);
    }
  }, []);
  return (
    <div className="heroSection">
        <img className='imgMain' src={windowWidth>700 ? hero : mobile} alt="" />
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
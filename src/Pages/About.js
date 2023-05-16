import { useState, useEffect } from 'react'
import './AboutP.css'
import AboutImg from '../Assets/Pages/About/aboutImg.png'
import copy from '../Assets/Pages/About/copy.png'
const About = () => {
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
    <div className='about'>
      <img src={windowWidth > 730 ? AboutImg : copy} alt="" />
      <div className="aboutText">
        <h1 className='headingAbout'>About Us</h1>
        <p className="paraAbout">
          This is an About Us page for this conceptual jewelry website, helping viewers become accustomed to Aani and its purpose, if it were real.</p>
        <p className="paraAbout">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p><p className="paraAbout">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Vel eros donec ac odio tempor orci dapibus ultrices. Mauris vitae ultricies leo integer. Placerat duis ultricies lacus sed turpis tincidunt id. Augue mauris augue neque gravida in fermentum et.

        </p>
      </div>
    </div>
  )
}

export default About
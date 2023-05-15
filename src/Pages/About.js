import React from 'react'
import './AboutP.css'
import AboutImg from '../Assets/Pages/About/aboutImg.png'
const About = () => {
  return (
    <div className='about'>
      <img src={AboutImg} alt="" />
      <div className="aboutText">
        <h1 className='headingAbout'>About Us</h1>
        <p className="paraAbout">
          This is an About Us page for this conceptual jewelry website, helping viewers become accustomed to Aani and its purpose, if it were real.<br /><br />

          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <br /><br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          <br /><br />
          Vel eros donec ac odio tempor orci dapibus ultrices. Mauris vitae ultricies leo integer. Placerat duis ultricies lacus sed turpis tincidunt id.<br /><br />

          Augue mauris augue neque gravida in fermentum et.


        </p>
      </div>
    </div>
  )
}

export default About
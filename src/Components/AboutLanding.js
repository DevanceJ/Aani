import React from 'react'
import './AboutLanding.css'
import AboutImg from '../Assets/About/About.png'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className='aboutBlack'>
        <img className='aboutBlackLeft' src={AboutImg} alt="" />
        <div className="aboutBlackRight">
            <h1>What are we made for<br/><br/></h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis expedita hic beatae? Explicabo natus saepe sunt beatae itaque commodi enim dolore minus perspiciatis nemo aperiam culpa tenetur harum temporibus dolor excepturi ut, voluptate recusandae? Eligendi!<br/><br/><br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consectetur perferendis odio voluptatum cumque, id fugiat nostrum ab asperiores placeat!</p>
            <Link to="/about"><button className='aboutBtn'>About Us</button></Link>
            
        </div>
    </div>
  )
}

export default About
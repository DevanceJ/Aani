import React from 'react'
import './Section1.css'
import Necklace from '../Assets/Section1/Neck.png'
import Ring from '../Assets/Section1/Ring.png'
import Earring from '../Assets/Section1/Ear.png'
import Charm from '../Assets/Section1/Charm.png'
import Brac from '../Assets/Section1/Brac.png'
const Section1 = () => {
  return (
    <>
    <div className='sectionHeading'>
        <h1>Shop by category</h1>
        <h1 style={{fontStyle: 'italic', fontSize: '18px'}}>Indulge in what we offer</h1>
    </div>
    <div className="display">
        <div className="card neck">
            <img src={Necklace} alt="" />
            <h1>Necklaces</h1>
        </div>
        <div className="card ear">
            <img src={Earring} alt="" />
            <h1>Earrings</h1>
        </div>
        <div className="card brac">
            <img src={Brac} alt="" />
            <h1>Bracelets</h1>
        </div>
        <div className="card ring">
            <img src={Ring} alt="" />
            <h1>Rings</h1>
        </div>
        <div className="card charm">
            <img src={Charm} alt="" />
            <h1>Charms</h1>
        </div>
    </div>
    </>
  )
}

export default Section1
import React from 'react'
import './Gifts.css'
import gift from '../Assets/Pages/Gifts/gift.png'
import gift2 from '../Assets/Pages/Gifts/gift2.png'
import gift3 from '../Assets/Pages/Gifts/gift3.png'
import gift4 from '../Assets/Pages/Gifts/gift4.png'
import gift5 from '../Assets/Pages/Gifts/gift5.png'
import gift6 from '../Assets/Pages/Gifts/gift6.png'
const Gifts = () => {
  return (
    <>
    <div className='giftBody'>

    <div className='giftHead'>
        <h1>Gifts</h1>
        <p>Lorem ipsum dolor sit amet.</p>
    </div>
    <div className="displayGift">
        <div className="cardGift">
        <img src={gift} alt="" />
        <h1>GIFTS 100$ AND UNDER</h1>
        </div>
        <div className="cardGift">
        <img src={gift2} alt="" />
        <h1>GIFTS 200$ - 300$</h1>
        </div>
        <div className="cardGift">
        <img src={gift3} alt="" />
        <h1>GIFTS 300$ AND MORE</h1>
        </div>
    </div>
    <div className="displayGift">
        <div className="cardGift">
        <img src={gift4} alt="" />
        <h1>GIFTS FOR HIM</h1>
        </div>
        <div className="cardGift">
        <img src={gift5} alt="" />
        <h1>GIFTS FOR HER</h1>
        </div>
        <div className="cardGift">
        <img src={gift6} alt="" />
        <h1>GIFTS FOR THEM</h1>
        </div>
    </div>
    </div>

    </>
  )
}

export default Gifts
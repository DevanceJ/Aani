import {useState} from 'react'
import './Navbar.css'
import logo from '../Assets/Navbar/logo.png'
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsBagFill } from 'react-icons/bs'
import { FaSearch } from "react-icons/fa";
import {IoMenu, IoClose} from 'react-icons/io5'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [isNavExpanded, setisNavExpanded] = useState(false)
  function handleClick() {
    setisNavExpanded(!isNavExpanded);
  }
  return (
    <div className="main">
    <div className="blackHead"></div>
    <div className="nav">
      <ul className= {isNavExpanded ? "navLeftPhone" : "navLeft nav-links"}>
        <li><img className='logo' src={logo} alt="" /></li>
        <li><Link onClick={handleClick}>JEWELLERY</Link></li>
        <li> <Link onClick={handleClick}>NEW REALEASES</Link></li>
        <li> <Link onClick={handleClick} to="/gifts">GIFTS</Link></li>
      </ul>
      <Link to="/">
        <h2 className="name">AANI</h2>
      </Link>
        <ul className='nav-links navRight'>
            <li className='searchLi'><input className='navSearch' placeholder='Search' type="search" /><FaSearch/></li>
            <li className='wishlist'><AiOutlineHeart/></li>
            <li className='cart'><BsBagFill/></li>
            <li><AiOutlineUser/></li>
            <div className="mobile" onClick={handleClick}>
              {isNavExpanded ? <IoClose/> : <IoMenu/>}
            </div>
        </ul>
    </div>
  </div>
  )
}

export default Navbar
import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa'
import './Footer.css'
const Footer = () => {
    return (
        <>

            <footer className="footer">
                <div className="cant">
                    <div className="row">

                        <div className="footer-col">
                            <h4>Customer Services</h4>
                            <ul>
                                <li>
                                    <a href="/">Track your order</a>
                                </li>
                                <li>
                                    <a href="/">Shipping & Returns</a>
                                </li>
                                <li>
                                    <a href="/">FAQs</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>About</h4>
                            <ul>
                                <li>
                                    <a href="/">Origins</a>
                                </li>
                                <li>
                                    <a href="/">Careers</a>
                                </li>
                                <li>
                                    <a href="/">Sustainability</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>MAIN LOCATIONS</h4>
                            <ul>
                                <li>
                                    <a href="/">Chicago,IL</a>
                                </li>
                                <li>
                                    <a href="/">San Francisco,CA</a>
                                </li>
                                <li>
                                    <a href="/">New York,NY</a>
                                </li>
                                <li>
                                    <a href="/">Seattle,WA</a>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Contact Us</h4>
                            <div className="social-links">
                                <a href="/"><FaInstagram /></a>
                                <a href="/"><FaFacebook /></a>
                                <a href="/"><FaTwitter /></a>
                                <a href="/"><FaYoutube /></a>
                                <a href="/"><FaLinkedin /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </>

    )
}

export default Footer
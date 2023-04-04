import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className="footer">
        <div className="topSection">
            <div className="item">
                <h1>Categories</h1>
                <span>Men</span>
                <span>Women</span>
                <span>Kids</span>
                <span>Footwear</span>
                <span>Sportswear</span>
            </div>
            <div className="item">
                <h1>Links</h1>
                <span>FAQ</span>
                <span>Outlet</span>
                <span>Shipping and delivery</span>
                <span>News</span>
            </div>
            <div className="item">
                <h1>About</h1>
                <span>About us</span>
            </div>
            <div className="item">
                <h1>Contact</h1>
                <span>Contact us</span>
            </div>
        </div>
        <div className="bottomSection">
            <div className="leftSection">
                <span className="logo">Temptations</span>
                <span className="copyright">© Copyright {new Date().getFullYear()} All rights reserved</span>
            </div>
            <div className="rightSection">
                <img src="" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer
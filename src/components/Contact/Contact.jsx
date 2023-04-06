import React from 'react'
import "./Contact.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Contact = () => {
  return (
    <div className="contact">
        <div className="contactWrapper">
            <span>CONTACT US</span>
            <div className="mail">
                <input type="text" placeholder="Email" />
                <button>SEND</button>
            </div>
            <div className="icons">
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
            </div>
        </div>
    </div>
  )
}

export default Contact
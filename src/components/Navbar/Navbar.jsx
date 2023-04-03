import React from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

import "./Navbar.scss"

const Navbar = ({ toggle }) => {


  return (
    <div className='navbar'>
        <div className="navbarWrapper">
            <div className="navbarLeft">
                <div className="item">
                    <span className='itemtext'>EN</span>
                    <KeyboardArrowDownIcon />
                </div>
                <div className="item">
                    <span className='itemtext'>USD</span>
                    <KeyboardArrowDownIcon />
                </div>
                <div className="item">
                    <Link className="link" to="products/1">Men</Link>
                </div>
                <div className="item">
                    <Link className="link" to="products/2">Women</Link>
                </div>
                <div className="item">
                    <Link className="link" to="products/3">Kids</Link>
                </div>
            </div>
            <div className="navbarCenter">
                <Link className="link" to='/'>
                    TEMPTATIONS
                </Link>
            </div>
            <div className="navbarRight">
                <div className="item">
                    <Link className="link" to='/'>
                        About
                    </Link>
                </div>
                <div className="item">
                    <Link className="link" to='/'>
                        Contact
                    </Link>
                </div>
                <div className="icons">
                    <SearchIcon />
                    <div className="cartIcon">
                        <ShoppingCartOutlinedIcon />
                        <span>0</span>
                    </div>
                </div>
            </div>
            <div className="mobile-icon" onClick={toggle}>
                <FaBars />
          </div>
        </div>
    </div>
  )
}

export default Navbar
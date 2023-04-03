import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


import "./Sidebar.scss";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <aside
        className={
          isOpen ? "sidebar-container active" : "sidebar-container inactive"
        }
        onClick={toggle}
      >
        <div className="icon" onClick={toggle}>
          <FaTimes className="close-icon" />
        </div>
        <div className="sidebar-wrapper">
          <ul className="sidebar-menu">
                <div >
                    <span >EN</span>
                    <KeyboardArrowDownIcon />
                </div>
                <div>
                    <span className='itemtext'>USD</span>
                    <KeyboardArrowDownIcon />
                </div>
                <Link className="link" to="products/1">Men</Link>
                <Link className="link" to="products/2">Women</Link>
                <Link className="link" to="products/3">Kids</Link>

            <Link className="sidebar-link" to="/" onClick={toggle}>
              About
            </Link>
            <Link className="sidebar-link" to="/" onClick={toggle}>
              Contact
            </Link>
            
          </ul>
          <div className="sidebar-button-wrapper">
            {/* <LinkR className="sidebar-route" to="signin">
              Login / Sign Up
            </LinkR> */}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

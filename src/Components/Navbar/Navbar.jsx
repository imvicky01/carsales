import React, { useState } from "react";
import "./Navbar.css";
import logo from '../../Assets/logo.png'
import { IoIosCloseCircle } from 'react-icons/io'
import { TbGridDots } from 'react-icons/tb'

const Navbar = () => {

  const [navbar, setnavbar] = useState('navbar')

  const showNavbar = () => {
    setnavbar('navbar')
  }

  const removeNavbar = () => {
    setnavbar('navbar')
  }

  return (
    <div className="header">
      <div className="logoDiv">
        <img src={logo} alt="logo image" className="logo" />
      </div>
      <div className={navbar}>
        <ul className="menu">
          <li onClick={removeNavbar} className="linkItem">
            <a href="/" className="link">
              Used Car
            </a>
          </li>
          <li onClick={removeNavbar} className="linkItem">
            <a href="/" className="link">
              New Cars
            </a>
          </li>
          <li onClick={removeNavbar} className="linkItem">
            <a href="/" className="link">
              Actions
            </a>
          </li>
          <li onClick={removeNavbar} className="linkItem">
            <a href="/" className="link">
              Seller
            </a>
          </li>
        </ul>

        <IoIosCloseCircle className='icon closeIcon' onClick={removeNavbar} />
      </div>
      <div className="signUp flex">
        <div className="text">Sign Up</div>
        <TbGridDots className='icon toggleNavbarIcon' onClick={showNavbar} />
      </div>
    </div>
  );
};

export default Navbar;

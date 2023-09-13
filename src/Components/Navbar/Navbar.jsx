import React from "react";
import "./Navbar.css";
import logo from '../../Assets/logo.png'
import { IoIosCloseCircle } from 'react-icons/io'
import { TbGridDots } from 'react-icons/tb'

const Navbar = () => {
  return (
    <div className="header">
      <div className="logoDiv">
        <img src={logo} alt="logo image" className="logo" />
      </div>
      <div className="navbar">
        <ul className="menu">
          <li className="linkItem">
            <a href="/" className="link">
              Used Car
            </a>
          </li>
          <li className="linkItem">
            <a href="/" className="link">
              Auctions
            </a>
          </li>
          <li className="linkItem">
            <a href="/" className="link">
              Sell
            </a>
          </li>
          <li className="linkItem">
            <a href="/" className="link">
              Used Car
            </a>
          </li>
        </ul>

        <IoIosCloseCircle className='icon' />
      </div>
      <div className="signUp flex">SignUp</div>
      <TbGridDots className='icon' />
    </div>
  );
};

export default Navbar;

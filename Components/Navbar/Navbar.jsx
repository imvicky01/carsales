import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <div className="logoDiv">
        <img src="" alt="" className="logo" />
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
      </div>
    </div>
  );
};

export default Navbar;

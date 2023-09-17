import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../Assets/logo.png";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [navbar, setNavbar] = useState("navbar");

  const showNavbar = () => {
    setNavbar("navbar showNavbar");
  };

  const removeNavbar = () => {
    setNavbar("navbar");
  };

  const [header, setHeader] = useState("header");
  useEffect(() => {
    const addBg = () => {
      if (window.scrollY >= 20) {
        setHeader("header addBg");
      }
    };
    window.addEventListener("scroll", addBg);

    return () => {
      window.removeEventListener("scroll", addBg);
    };
  }, []);

  return (
    <div className={header}>
      <div className="logoDiv">
        <img src={logo} alt="logo image" className="logo" />
      </div>
      <div className={navbar}>
        <ul className="menu">
          <li onClick={removeNavbar} className="listItem">
            <a href="/" className="link">
              Used Car
            </a>
          </li>
          <li onClick={removeNavbar} className="listItem">
            <a href="/" className="link">
              New Cars
            </a>
          </li>
          <li onClick={removeNavbar} className="listItem">
            <a href="/" className="link">
              Actions
            </a>
          </li>
          <li onClick={removeNavbar} className="listItem">
            <a href="/" className="link">
              Seller
            </a>
          </li>
        </ul>

        <IoIosCloseCircle className="icon closeIcon" onClick={removeNavbar} />
      </div>
      <div className="signUp flex">
        <div className="text">Sign Up</div>
        <TbGridDots className="icon toggleNavbarIcon" onClick={showNavbar} />
      </div>
    </div>
  );
};

export default Navbar;

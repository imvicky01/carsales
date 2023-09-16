import React, { useEffect } from "react";
import "./Footer.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  return (
    <div className="footer">
      <div className="footerContainer container">
        <div className="footterMenuDiv grid">
          <div data-aos="fade-up" className="singleGrid">
            <span className="footerTitle">About</span>
            <ul className="footerUl grid">
              <li className="footerLi">How it works</li>
              <li className="footerLi">Careers</li>
              <li className="footerLi">Affliates</li>
              <li className="footerLi">Media</li>
            </ul>
          </div>
          <div data-aos="fade-up" className="singleGrid">
            <span className="footerTitle">About</span>
            <ul className="footerUl grid">
              <li className="footerLi">How it works</li>
              <li className="footerLi">Careers</li>
              <li className="footerLi">Affliates</li>
              <li className="footerLi">Media</li>
            </ul>
          </div>

          <div data-aos="fade-up" className="singleGrid">
            <span className="footerTitle">Become Seller</span>
            <ul className="footerUl grid">
              <li className="footerLi">Add Vehicles</li>
              <li className="footerLi">Resourcce center</li>
              <li className="footerLi">Bonds</li>
              <li className="footerLi">Release Dates</li>
            </ul>
          </div>

          <div data-aos="fade-up" className="singleGrid">
            <span className="footerTitle">Community</span>
            <ul className="footerUl grid">
              <li className="footerLi">Recommendations</li>
              <li className="footerLi">Gift cards</li>
              <li className="footerLi">Top ups</li>
              <li className="footerLi">Selling</li>
            </ul>
          </div>

          <div data-aos="fade-up" className="singleGrid">
            <span className="footerTitle">Booking Support</span>
            <ul className="footerUl grid">
              <li className="footerLi">Updates for Covid-19</li>
              <li className="footerLi">help center</li>
              <li className="footerLi">Grages</li>
              <li className="footerLi">Trust & safty</li>
            </ul>
          </div>
        </div>

        <div className="lowerSection grid">
          <p>2023 All right reserved</p>
          <blockquote>IsraTech Projects</blockquote>
        </div>
      </div>
    </div>
  );
};

export default Footer;

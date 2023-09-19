import React, { useState } from "react";
import "./NavbarPage.scss"; // Import the SCSS file
import Image1 from "../../Assets/14.jpg";
import Image2 from "../../Assets/15.jpg";
import Image3 from "../../Assets/16.jpg";
import Image4 from "../../Assets/17.jpg";
import Lightbox from "./Lightbox.jsx"; // Import the Lightbox component

const NavbarPage = () => {
  const [showLightbox, setShowLightbox] = useState(false);

  const openLightbox = () => {
    setShowLightbox(true);
  };

  return (
    <div className="product-container">
      {showLightbox && (
        <Lightbox
          images={[Image1, Image2, Image3, Image4]}
          onClose={() => setShowLightbox(false)}
        />
      )}
      <div className="product-gallery">
        <div className="gallery-image">
          <img
            src={Image1}
            alt="Product 1"
            onClick={openLightbox}
            className="gallery-image-item"
          />
        </div>
        <div className="gallery-image">
          <img
            src={Image2}
            alt="Product 2"
            onClick={openLightbox}
            className="gallery-image-item"
          />
        </div>
        <div className="gallery-image">
          <img
            src={Image3}
            alt="Product 3"
            onClick={openLightbox}
            className="gallery-image-item"
          />
        </div>
        <div className="gallery-image">
          <img
            src={Image4}
            alt="Product 4"
            onClick={openLightbox}
            className="gallery-image-item"
          />
        </div>
      </div>
      <div className="product-details">
        <div className="product-image">
          <img src={Image1} alt="Product" />
        </div>
        <div className="product-info">
          <p>Nanba Car House</p>
          <h1>Mr. Bean Car</h1>
          <h4>$5000</h4>
          <a href="#" className="btn">
            Call Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarPage;

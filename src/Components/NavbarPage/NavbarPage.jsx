// NavbarPage.jsx
import React, { useState } from "react";
import "./NavbarPage.scss"; // Import the SCSS file
import Image1 from "../../Assets/14.jpg";
import Image2 from "../../Assets/15.jpg";
import Image3 from "../../Assets/16.jpg";
import Image4 from "../../Assets/17.jpg";
import Lightbox from "./Lightbox.jsx"; // Import the Lightbox component

const NavbarPage = () => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const openLightbox = (index) => {
    setSlideIndex(index);
    setShowLightbox(true);
  };

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousSlide = () => {
    setSlideIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const images = [Image1, Image2, Image3, Image4];

  return (
    <div className="product-container">
      {showLightbox && (
        <Lightbox
          images={images}
          slideIndex={slideIndex}
          nextSlide={nextSlide}
          previousSlide={previousSlide}
          setShowLightbox={setShowLightbox}
        />
      )}
      <div className="product-gallery">
        {images.map((image, index) => (
          <div className="gallery-image" key={index}>
            <img
              src={image}
              alt={`Product ${index + 1}`}
              onClick={() => openLightbox(index)}
              className="gallery-image-item"
            />
          </div>
        ))}
      </div>
      <div className="product-details">
        <div className="product-image">
          <img src={images[slideIndex]} alt={`Product ${slideIndex + 1}`} />
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

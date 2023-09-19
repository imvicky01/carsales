// Lightbox.jsx
import React from "react";
import "./Lightbox.scss"; // Import the SCSS file

const Lightbox = ({
  images,
  slideIndex,
  nextSlide,
  previousSlide,
  setShowLightbox,
}) => {
  return (
    <div className="lightbox-container">
      {/* Lightbox content goes here */}
      <div className="lightbox-slider">
        <img src={images[slideIndex]} alt={`Slide ${slideIndex + 1}`} />
        <button className="prev-button" onClick={previousSlide}>
          Previous
        </button>
        <button className="next-button" onClick={nextSlide}>
          Next
        </button>
      </div>
      <button className="close-button" onClick={() => setShowLightbox(false)}>
        Close
      </button>
    </div>
  );
};

export default Lightbox;

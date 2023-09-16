import React, { useEffect } from "react";
import "./Trending.css";

import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

import car1 from "../../Assets/1.png";
import car2 from "../../Assets/5.png";
import car3 from "../../Assets/6.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Trending = () => {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);

  return (
    <div className="trending section">
      <div className="secContainer container">
        <div data-aos="fade-up" className="secHeading flex">
          <h3 className="secTitle">Trending Near you</h3>

          <div className="navBtns flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon righticon" />
          </div>
        </div>

        <div className="carContainer grid">
          <div data-aos="fade-up" className="singleCar grid">
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_seller flex">
              <span className="price">$41,200</span>
              <span className="seller">Best seller</span>
            </div>
          </div>
          <div data-aos="fade-up" className="singleCar grid">
            <div className="imgDiv">
              <img src={car2} alt="Car Image" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_seller flex">
              <span className="price">$41,200</span>
              <span className="seller">Best seller</span>
            </div>
          </div>
          <div data-aos="fade-up" className="singleCar grid">
            <div className="imgDiv">
              <img src={car3} alt="Car Image" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_seller flex">
              <span className="price">$41,200</span>
              <span className="seller">Best seller</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;

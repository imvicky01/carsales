import React from "react";
import "./Auction.css";

import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

import car1 from "../../Assets/1.png";
import car2 from "../../Assets/2.png";
import car3 from "../../Assets/8.png";
import car4 from "../../Assets/9.png";
import car5 from "../../Assets/10.png";
import car6 from "../../Assets/11.png";

const Auction = () => {
  return (
    <div className="auction section">
      <div className="secContainer container">
        <div className="secHeading flex">
          <h3 className="secTitle">Active Auctions</h3>

          <div className="navBtns flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon righticon" />
          </div>
        </div>

        <div className="carContainer grid singleCarActive">
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car1} alt="Car Image" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$41,200</span>
              <span className="buybtn">buy now</span>
            </div>
          </div>

          <div className="singleCar grid singleCarActive">
            <div className="imgDiv">
              <img src={car2} alt="Car Image" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$41,200</span>
              <span className="buybtn">buy now</span>
            </div>
          </div>

          <div className="singleCar grid singleCarActive">
            <div className="imgDiv">
              <img src={car3} alt="Car Image" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$41,200</span>
              <span className="buybtn">buy now</span>
            </div>
          </div>

          <div className="singleCar grid singleCarActive">
            <div className="imgDiv">
              <img src={car4} alt="Car Image" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$41,200</span>
              <span className="buybtn">buy now</span>
            </div>
          </div>

          <div className="singleCar grid singleCarActive">
            <div className="imgDiv">
              <img src={car5} alt="Car Image" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$41,200</span>
              <span className="buybtn">buy now</span>
            </div>
          </div>

          <div className="singleCar grid singleCarActive">
            <div className="imgDiv">
              <img src={car6} alt="Car Image" />
            </div>
            <h5 className="carTitle">Used 2019 Audi S4 Premium Plus</h5>
            <span className="miles">11457 Miles</span>
            <span className="AWD">AWD 4-Cylinder Turbo</span>

            <div className="price_buyBtn flex">
              <span className="price">$41,200</span>
              <span className="buybtn">buy now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auction;

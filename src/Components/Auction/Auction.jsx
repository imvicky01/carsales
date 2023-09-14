import React from "react";
import "./Auction.css";

import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

import car1 from "../../Assets/1.png";

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

        <div className="carContainer grid">
          <div className="singleCar grid">
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
        </div>
      </div>
    </div>
  );
};

export default Auction;

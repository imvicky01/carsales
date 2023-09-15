import React from "react";
import "./Sellers.css";

import sellerImage1 from "../../Assets/logo.png";
import sellerImage2 from "../../Assets/logo.png";
import sellerImage3 from "../../Assets/logo.png";
import sellerImage4 from "../../Assets/logo.png";

const Sellers = () => {
  return (
    <div className="seller section">
      <div className="secContainer container">
        <div className="secHeading grid">
          <h3 className="secTitle">Explore top sellers in town</h3>
          <p>
            {" "}
            Joseph samuel girad holds the guinness world record for being the
            grestest salesman in the world
          </p>
        </div>
        <div className="sellersContainer grid">
          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={sellerImage1} alt="" className="img" />
            </div>
            <span className="info">
              <h4 className="name">Toyota</h4>
              <p>from $40k</p>
            </span>
          </div>

          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={sellerImage2} alt="" className="img" />
            </div>
            <span className="info">
              <h4 className="name">Mercedes benz</h4>
              <p>from $50k</p>
            </span>
          </div>

          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={sellerImage3} alt="" className="img" />
            </div>
            <span className="info">
              <h4 className="name">Volkswagen</h4>
              <p>from $35k</p>
            </span>
          </div>

          <div className="singleSeller flex">
            <div className="imgDiv flex">
              <img src={sellerImage4} alt="" className="img" />
            </div>
            <span className="info">
              <h4 className="name">Hyundai</h4>
              <p>from $23k</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sellers;

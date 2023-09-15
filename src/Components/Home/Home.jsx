import React, { useEffect } from "react";
import "./Home.css";

import homeImage from '../../Assets/4.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(() => {
    Aos.init(
      {
        duration: 3000
      }
    )
  }

  )
  return <div className="home">
    <div className="secContainer">
      <dir data-aos='fade-up' className="homeText">
        <span className="homeSpan">
          Meet your new car
        </span>
        <h1 className="homeTitle">
          Honda Civic Type R
        </h1>
        <div className="btns flex">
          <button data-aos='fade-right' className="btn">More Details</button>
          <button data-aos='fade-left' className="btn primaryBtn">Test Drive</button>
        </div>
      </dir>
      <div data-aos='fade-down-right' className="homeImage">
        <img src={homeImage} alt="home image" />

      </div>
    </div>
  </div>;
};

export default Home;

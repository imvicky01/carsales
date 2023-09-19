import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import Trending from "./Components/Trending/Trending";
import Sellers from "./Components/Sellers/Sellers";
import Auction from "./Components/Auction/Auction";
import Review from "./Components/Review/Review";
import Footer from "./Components/Footer/Footer";
import NavbarPage from "./Components/NavbarPage/NavbarPage";

const App = () => {
  return (
    <Router>
      <div className="title">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/navbar-page" element={<NavbarPage />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

const MainPage = () => {
  return (
    <div>
      <Home />
      <Search />
      <Trending />
      <Sellers />
      <Auction />
      <Review />
    </div>
  );
};

export default App;

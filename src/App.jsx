import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auction from "./Components/Auction/Auction";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import Trending from "./Components/Trending/Trending";
import Sellers from "./Components/Sellers/Sellers";
import Review from "./Components/Review/Review";
import Footer from "./Components/Footer/Footer";
import NavbarPage from "./Components/NavbarPage/NavbarPage";

const App = () => {
  return (
    <Router>
      <div className="title">
        <Navbar />
        <Routes>
          {/* Define a parent route for /add */}
          <Route path="/add" element={<AddPage />}>
            {/* Nest the child routes for /add */}
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Route>
          {/* Define other routes */}
          <Route path="/home" element={<Trending />} />
          <Route path="/sellers" element={<Sellers />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/review" element={<Review />} />
          <Route path="/navbar" element={<NavbarPage />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

// AddPage component to render Home and Search components together
const AddPage = () => {
  return (
    <div>
      <Home />
      <Search />
    </div>
  );
};

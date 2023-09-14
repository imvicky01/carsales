import React from "react";
import "./Search.css";

import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="search">
      <div className="secContainer container">
        <h3 className="title">Which vehicle you are looking for?</h3>

        <div className="searchDiv grid">
          <input type="text" placeholder="Type" />
          <input type="number" placeholder="year" />
          <input type="text" placeholder="Model" />
          <input type="number" placeholder="Price" />
          <button className="btn primary flex">
            <AiOutlineSearch className="icon" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;

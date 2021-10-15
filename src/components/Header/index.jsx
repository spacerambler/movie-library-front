import React from "react";
import SearchBar from "./SearchBar";
import propTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";


function Header(props) {
  // console.log(props);
  return (
    <header>
      <h1>Movie Library</h1>
      <SearchBar setData={props.setData} />
      <Link to="/login" className="btn">
        Login
      </Link>
      <Link to="'/signup" className="btn">
        Create Account
      </Link>
    </header>
  );
}

Header.propTypes = {
  setData: propTypes.setData,
};

export default Header;
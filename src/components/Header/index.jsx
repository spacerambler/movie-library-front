import React from "react";
import SearchBar from "./SearchBar";
// Here we need to import propTypes
import propTypes from "prop-types";

function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>Movie Library</h1>
      <SearchBar setData={props.setData} />
      <a className="btn" href="/login">
        Login
      </a>
    </header>
  );
}

Header.propTypes = {
  setData: propTypes.setData,
};

export default Header;
import React from "react";
import PropTypes from "prop-types";

function SearchBar() {
  return (
<header>
<form id="form">
    <input type="text" id="search" className="search" placeholder= "Search" />
</form>
</header>
  )
}

SearchBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SearchBar;



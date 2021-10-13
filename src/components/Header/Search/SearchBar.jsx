import React from "react";
import PropTypes from "prop-types";

function SearchBar() {
    return (
    <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input onClick={callSearchFunction} type="submit" value="SEARCH" />
        </form>
    )
  };

  SearchBar.propTypes = {
      searchValue: PropTypes.string.isRequired, 
  }

export default SearchBar;



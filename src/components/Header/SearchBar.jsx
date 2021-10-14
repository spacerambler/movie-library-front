import React, { useState } from "react";
// import PropTypes from "prop-types";
import searchMovies from "../../services/API.search";

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");
  console.log("search bar", this.props.setSearch)
  const handleSearchInputChanges = (e) => {
      setSearchValue(e.target.value);
  }

  const resetInputField = () => {
      setSearchValue("")
  }

  const callSearchFunction = (e) => {
      e.preventDefault();
      searchMovies(searchValue);
      resetInputField();
  }
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

  // SearchBar.propTypes = {
  //     searchValue: PropTypes.string.isRequired, 
  // }

export default SearchBar;


// https://www.freecodecamp.org/news/how-to-build-a-movie-search-app-using-react-hooks-24eb72ddfaf7/
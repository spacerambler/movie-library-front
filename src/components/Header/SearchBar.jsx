import React, { useState } from "react";
import propTypes from "prop-types";
import searchMovies from "../../services/API.search";

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");
  // console.log("search bar", props);
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = async (e) => {
    e.preventDefault();
    const searchValues = await searchMovies(searchValue);
    // console.log(searchValues);
    props.setData(searchValues);
    resetInputField();
  };
  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
};

SearchBar.propTypes = {
  setData: propTypes.setData,
};

export default SearchBar;

// https://www.freecodecamp.org/news/how-to-build-a-movie-search-app-using-react-hooks-24eb72ddfaf7/
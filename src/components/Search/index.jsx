/* eslint-disable camelcase */
import PropTypes from "prop-types";
import React, { useState } from "react";
import SearchBar from "./SearchBar"


const Search (props) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    return (
        <SearchBar />
    );
}
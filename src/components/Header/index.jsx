import React from "react";
import SearchBar from "./SearchBar";
// import PropTypes from "prop-types";

const Header = (props) => {
console.log(props.search)
    return (
        <header>
        <h1>Movie Library</h1>
        <SearchBar setSearch={props.setData} />
        <a className="btn" href="/login">Login</a>
        </header>
    )
}

// Header.PropTypes = {
//     setData: PropTypes.setData.isRequired
// }

export default Header;
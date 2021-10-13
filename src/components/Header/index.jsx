import React from "react";
import SearchBar from "./Search";

function Header() {


    return (
        <header>
        <h1>Movie Library</h1>
        <SearchBar />
        <a className="btn" href="/login">Login</a>
        </header>
    )
}

export default Header;
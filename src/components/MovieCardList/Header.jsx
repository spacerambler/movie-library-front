import React from "react";
import PropTypes from "prop-types";


function Header({ title }) {
  return (
    <div className="movie-info">
    <h3>{title}</h3>
</div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

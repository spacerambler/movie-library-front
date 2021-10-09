import React from "react";
import PropTypes from "prop-types";

function Header({ title }) {
  return <h2>{title}</h2>;
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

import React from "react";
import PropTypes from "prop-types";

function Description({ description }) {
  return <p>{description}</p>;
}

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;

import PropTypes from "prop-types";
import React from "react";

const BASE_URL = "https://image.tmdb.org/t/p/w500";

function Poster({ posterPath, title }) {
  return (
    <img src={`${BASE_URL}/${posterPath}`} alt={title} />
  );
}

Poster.propTypes = {
  posterPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Poster;

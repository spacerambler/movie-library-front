import PropTypes from "prop-types";
import React from "react";

const BASE_URL = "https://image.tmdb.org/t/p/original";

function Poster({ posterPath, title }) {
  return (
    <img src={`${BASE_URL}/${posterPath}`} alt={title} className="max-w-sm" />
  );
}

Poster.propTypes = {
  posterPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Poster;

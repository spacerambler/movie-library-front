import PropTypes from "prop-types";
import React from "react";
// import Description from "./Description";
import Header from "./Header";
import Poster from "./Poster";

function MovieCardList({ movies }) {
  return movies.map(
    ({ id, title, poster_path: posterPath }) => (
      <section key={id} className="movie">
        <Poster posterPath={posterPath} />
        <Header title={title} />
        {/* <Description description={description} /> */}
      </section>
    )
  );
}

MovieCardList.propTypes = {
  // Array is required, but it can be empty
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieCardList;

import React, { useState, useEffect } from "react";
import "./App.css";
import getMovies from "./services/API.services";
import MovieCardList from "./components/MovieCardList";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <main>
      <MovieCardList movies={data} />
    </main>
  );
}

export default App;

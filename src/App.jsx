import React, { useState, useEffect } from "react";
import "./App.css";
import getMovies from "./services/API.services";
import MovieCardList from "./components/MovieCardList";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("use effect running")
    getMovies().then((jsonData) => {
      console.log("use effect" + jsonData)
      setData(jsonData);
    })
  }, []);

  return (
    <main>
      <MovieCardList movies={data} />
    </main>
  );
}

export default App;

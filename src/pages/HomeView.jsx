// import { gql, useQuery } from "@apollo/client";
// import AuthContext from "../context/AuthContext";
import React, { useState } from "react";
import MovieCardList from "../components/MovieCardList";
import Header from "../components/Header";

import getMovies from "../services/API.services";
// import searchMovies from "../services/API.search";

function HomeView() {
  const [data, setData] = useState([]);

  React.useEffect(() => {
    //   console.log("use effect running")
    getMovies().then((jsonData) => {
      // console.log("use effect" + jsonData)
      setData(jsonData);
    });
  }, []);

  return (
    <>
      <Header setData={setData} />
      <main>
        <MovieCardList movies={data} />
      </main>
    </>
  );
}

export default HomeView;
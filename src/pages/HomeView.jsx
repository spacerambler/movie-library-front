import { gql, useQuery } from "@apollo/client";
import AuthContext from "../context/AuthContext";
import React, { useState, useEffect } from "react";
import MovieCardList from "../components/MovieCardList"
import Header from "../components/Header"

import getMovies from "./services/API.services";


function HomeView() {

    // const [isLoggedIn, setIsLoggedIn] = React.useContext(AuthContext);

    const [data, setData] = useState([]);

    React.useEffect(() => {
    //   console.log("use effect running")
      getMovies().then((jsonData) => {
        // console.log("use effect" + jsonData)
        setData(jsonData);
      })
    }, []);

    const handleClick = () => {}

    return (
        <>
        <Header />
        <main>
        <MovieCardList movies={data} />
        </main>
        </>
    );
}

export default HomeView;
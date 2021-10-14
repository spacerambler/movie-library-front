import { gql, useQuery } from "@apollo/client";
import AuthContext from "../context/AuthContext";
import React, { useState, useEffect } from "react";
import MovieCardList from "../components/MovieCardList"
import Header from "../components/Header"

import getMovies from "../services/API.services";
// import searchMovies from "../services/API.search";


function HomeView() {
    const [data, setData] = useState([]);

    // const [isLoggedIn, setIsLoggedIn] = React.useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    
    const [errorMessage, setErrorMessage] = useState(null);

    React.useEffect(() => {
    //   console.log("use effect running")
      getMovies().then((jsonData) => {
        // console.log("use effect" + jsonData)
        setData(jsonData);
      })
    }, []);

    // add in search api here? 
    const search = (value) => {
        setData(value);
    }
    

    return (
        <>
        <Header search={search} />
        <main>
        <MovieCardList movies={data} />
        </main>
        </>
    );
}

export default HomeView;
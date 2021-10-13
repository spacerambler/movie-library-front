import { gql, useQuery } from "@apollo/client";
import AuthContext from "../../context/AuthContext";
import React from "react";
import { Link } from "react-router-dom";

// queries 
const GET_MOVIES = gql`
query GetMovies {
    movies {
        [movie]
    }
}
`;

function HomeView() {
    React.useEffect(() => {
        document.title = "Movie Library Home"
    });

    const [isLoggedIn, setIsLoggedIn] = React.useContext(AuthContext);
    const [movieUpdate] = React.useContext(MovieUpdateContext);

    const { data } = useQuery();

    const handleClick = () => {}

    return (
        <>

        </>
    );
}

export default HomeView;
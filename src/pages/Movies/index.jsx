import { gql, useQuery } from "@apollo/client";
import AuthContext from "../../context/AuthContext";
import React from "react";
import MovieCardList from "../../components/MovieCardList"

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

    const { data } = useQuery(GET_MOVIES);

    const handleClick = () => {}

    return (
        <>
    <main>
        <MovieCardList movies={data} />
    </main>
        </>
    );
}

export default HomeView;
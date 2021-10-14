import { gql } from "@apollo/client";

// queries 
const GET_MOVIES = gql`
query GetMovies {
    movies {
        [movie]
    }
}
`;

export default GET_MOVIES;
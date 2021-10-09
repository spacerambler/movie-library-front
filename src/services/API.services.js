import tmdbToken from "../utils/config"

const BASE_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1"

const getMovies = async () => {
    const response = await fetch(`${BASE_URL}&apiid=${tmdbToken}`)
    const data = await response.json()
    setData(data);
};

export default getMovies;

// https://www.pluralsight.com/guides/access-data-from-an-external-api-into-a-react-component
const BASE_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b0626c910c1f8ba91e48d0c025e3b95b&page=1"

const getMovies = async () => {
    const response = await fetch(BASE_URL)
    const jsonData = await response.json();
    console.log("api services", jsonData)
    return jsonData.results;
};

export default getMovies;

// https://www.pluralsight.com/guides/access-data-from-an-external-api-into-a-react-component
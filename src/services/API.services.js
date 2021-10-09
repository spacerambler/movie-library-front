import config from "@app/utils/config"

const BASE_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1"

export default {
    index() {
        return (
            const getMovies = async () => {
                const res = await(`${BASE_URL}&apiid=${config.tmdbToken}`);
                const data = await response.json();
                setData(data);
            }
        )
      }
}

function getMovies(){
    fetch(`${BASE_URL}&apiid=${config.tmdbToken}`)
    .then(function(response) {
        console.log(response);
        return response.json()
    })
    .then(function(data) {
        console.log(data);
        setData(data);
    })
}
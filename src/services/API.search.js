const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=b0626c910c1f8ba91e48d0c025e3b95b&query="

// how to call in the search value here

const searchMovies = async (search) => {
    const res = await fetch(`${SEARCH_API}${search}`)
    const searchData = await res.json();
    // console.log("search", searchData)
    return searchData.results;
};

export default searchMovies;
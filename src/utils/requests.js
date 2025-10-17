const API_KEY = process.env.REACT_APP_API_KEY; 
const requests = {
fetchTrending: "/trending/all/week?api_key=3e6c822faeb8bdd789de359501c7f943&language=en-US",
fetchNetflixOriginals: "/discover/tv?api_key=3e6c822faeb8bdd789de359501c7f943&with_networks-213",
fetchTopRatedMovies: "/movie/top_rated?api_key=3e6c822faeb8bdd789de359501c7f943&language=en-US",
fetchActionMovies: "/discover/movie?api_key=3e6c822faeb8bdd789de359501c7f943&with_genres=28",
fetchComedyMovies: "/discover/movie?api_key=3e6c822faeb8bdd789de359501c7f943&with_genres=35",
fetchHorrorMovies: "/discover/movie?api_key=3e6c822faeb8bdd789de359501c7f943&with_genres-27",
fetchRomanceMovies: "/discover/movie?api_key=3e6c822faeb8bdd789de359501c7f943&with_genres=10749",
fetchDocumentaries: "/discover/movie?api_key=3e6c822faeb8bdd789de359501c7f943&with_genres=99",
fetchTvShow: "tv/popular?api_key=3e6c822faeb8bdd789de359501c7f943&language=en-US&page=1"
};
export default requests;

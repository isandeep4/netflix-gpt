import { API_OPTIONS } from "./../utils/constants";

export const UseFetchTMDBMovies = () => {
  const fetchTMBDMovies = async (movieName) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  return { fetchTMBDMovies };
};

import { MovieList } from "./MovieList";
import { useSelector } from "react-redux";

const GPTMovieSuggestion = () => {
  const { moviesNames, moviesResult } = useSelector((store) => store.gpt);
  if (!moviesNames) return null;
  return (
    <div className="bg-black m-4 bg-opacity-80">
      {moviesNames.map((movie, index) => (
        <MovieList title={movie} movies={moviesResult[index]} />
      ))}
    </div>
  );
};
export default GPTMovieSuggestion;

import { MovieCard } from "./MovieCard";

export const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h2 className="text-3xl py-6 text-white">{title}</h2>
      <div className="flex overflow-auto no-scrollbar">
        <div className="flex">
          {movies?.map((movie, index) => (
            <MovieCard posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

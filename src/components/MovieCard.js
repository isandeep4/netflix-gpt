import { IMG_CDN } from "../utils/constants";
export const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img alt="movie card" src={IMG_CDN + posterPath} />
    </div>
  );
};

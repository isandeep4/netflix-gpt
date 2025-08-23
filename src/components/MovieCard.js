import { IMG_CDN } from "../utils/constants";
export const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="movie card" src={IMG_CDN + posterPath} />
    </div>
  );
};

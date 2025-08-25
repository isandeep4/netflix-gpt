import { useSelector } from "react-redux";
import { UseMovieTrailer } from "./../hooks/useMovieTrailer";

const VideoBackgroundNew = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  UseMovieTrailer(movieId);

  return (
    <div className="w-screen max-h-[800px] overflow-auto no-scrollbar">
      <iframe
        className="w-screen aspect-video pt-28 md:pt-0"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="Video Player"
      ></iframe>
    </div>
  );
};

export default VideoBackgroundNew;

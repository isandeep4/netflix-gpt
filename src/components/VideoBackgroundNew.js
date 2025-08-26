import { useSelector } from "react-redux";
import { UseMovieTrailer } from "./../hooks/useMovieTrailer";

const VideoBackgroundNew = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  UseMovieTrailer(movieId);

  return (
    <div className="w-screen max-h-[800px] pt-28 md:pt-0">
      <iframe
        className="w-screen aspect-video"
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

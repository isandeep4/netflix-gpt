import React, {useEffect} from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import {addTrailerVideo} from '../utils/movieSlice'

const VideoBackgroundNew = ({movieId}) => {

  const disptach = useDispatch();
  const trailerVideo = useSelector(store=>store.movies.trailerVideo);

  const getMovieVideos = async () => {
    if(!movieId){
      return;
    }
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
    const json = await data.json();
    

    const filteredData = json.results.filter((video)=>video.type === "Trailer")
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    disptach(addTrailerVideo(trailer));
  }

  useEffect(()=>{
    getMovieVideos();
  },[])

  return (
    <div>
      <iframe
        className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/" + trailerVideo?.key+ "?&autoplay=1&mute=1"}
        title="Video Player"
      >
        
      </iframe>
    </div>
  )
}

export default VideoBackgroundNew;
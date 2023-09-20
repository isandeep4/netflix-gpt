import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackgroundNew from './VideoBackgroundNew';
import VideoTitleNew from './VideoTitleNew';



const MainContainer = () => {
    const movies = useSelector(store=>store.movies?.nowPlayingMovies);

    if(!movies){
        return;
    }
    const mainMovie = movies[0];
    console.log("mainMovies", mainMovie);

    const {id, original_title, overview} = mainMovie;

  return (
    <div>
        <VideoTitleNew title={original_title} overview={overview} />
        <VideoBackgroundNew movieId={id} />
    </div>
  )
}

export default MainContainer
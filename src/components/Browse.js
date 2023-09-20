import React from 'react'
import Header, { headerWithLogOut } from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  
  useNowPlayingMovies();

  const BrowseHeader = headerWithLogOut(Header);

  return (
    <div>
      <BrowseHeader />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse
import React from "react";
import Header, { headerWithLogOut } from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "./../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const BrowseHeader = headerWithLogOut(Header);

  return (
    <div>
      <BrowseHeader />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;

import React from "react";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useTrendingMovies from "../customHooks/useTrendingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      {/* 
      main video container
        -video bg
        -video title
      secondary container
        -movie list
        -cards*/}

      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;

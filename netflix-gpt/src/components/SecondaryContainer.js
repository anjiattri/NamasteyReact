import React from "react";
import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

  if (!movies) {
    return;
  }
  return (
    <div className="bg-black">
      <div className="-mt-60 pl-12 relative z-20">
        <MovieList title="Now Playing Movies" moviesData={movies} />
        <MovieList title="Trending Movies" moviesData={movies} />
        <MovieList title="Horror Movies" moviesData={movies} />
        <MovieList title="Hindi Movies" moviesData={movies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;

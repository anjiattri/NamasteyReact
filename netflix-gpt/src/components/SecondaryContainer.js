import React from "react";
import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);

  if (!movies) {
    return;
  }
  return (
    <div className="bg-black">
      <div className="mt00 md:-mt-60 md:pl-12 pl-4 relative z-20">
        <MovieList
          title="Now Playing Movies"
          moviesData={movies.nowPlayingMovies}
        />
        <MovieList title="Popular Movies" moviesData={movies.popularMovies} />
        <MovieList
          title="Top Rated Movies"
          moviesData={movies.topRatedMovies}
        />
        <MovieList title="Trending Movies" moviesData={movies.trendingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;

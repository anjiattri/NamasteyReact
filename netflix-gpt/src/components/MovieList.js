import React from "react";
import MovieCard from "./MovieCard";

export const MovieList = ({ title, moviesData }) => {
  return (
    <div className="px-6  text-white">
      <h1 className="font-bold text-2xl py-2 ">{title}</h1>

      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {moviesData?.map((movie) => (
            <MovieCard key={movie.id} poster_path={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

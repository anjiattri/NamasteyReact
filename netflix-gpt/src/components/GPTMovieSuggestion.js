import React from "react";
import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";
const GPTMovieSuggestion = () => {
  const { movieName, movieResults } = useSelector((store) => store.gpt);
  if (!movieName) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      {movieName.map((movie, index) => (
        <MovieList key={movie} title={movie} moviesData={movieResults[index]} />
      ))}
    </div>
  );
};

export default GPTMovieSuggestion;

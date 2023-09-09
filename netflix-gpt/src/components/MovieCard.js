import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
    console.log(poster_path)
  return (
    <div className="w-52 pr-4">
      <img src={IMG_CDN_URL + poster_path} alt="movie-card" />
    </div>
  );
};

export default MovieCard;

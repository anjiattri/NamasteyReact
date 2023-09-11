import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGPTMovieResult } from "../redux/gptSlice";
import { API_OPTIONS } from "../utils/constants";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";

const GPTSearchBar = () => {
  const language = useSelector((store) => store.config.language);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (moivename) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${moivename}&include_adult=false&language=en-US&page=1`;
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    return json?.results;
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(searchText.current.value);
    const gptQuery =
      "Act as a movie recommendation system ans suggest some movies for the query: " +
      searchText.current.value +
      ". only give me names of 5 movies,comma separated";
    const searchResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!searchResults.choices) {
      console.log("errror");
    }
    const gptMovie = searchResults?.choices[0]?.message?.content.split(",");
    const promiseArray = gptMovie.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGPTMovieResult({ movieName: gptMovie, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form className="bg-black w-full md:w-1/2 grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[language].gpsSearchPlaceHolder}
          className="p-4 m-4 col-span-9"
          ref={searchText}
        />
        <button
          className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4"
          onClick={handleSearch}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;

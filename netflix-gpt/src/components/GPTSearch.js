import React from "react";
import { BG_URL } from "../utils/constants";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          src={BG_URL}
          alt="background"
          className="h-screen object-cover md:object-none md:h-fit"
        />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestion />
    </>
  );
};

export default GPTSearch;

import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GPTSearchBar = () => {
  const language = useSelector((store) => store.config.language);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[language].gpsSearchPlaceHolder}
          className="p-4 m-4 col-span-9"
        />
        <button className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;

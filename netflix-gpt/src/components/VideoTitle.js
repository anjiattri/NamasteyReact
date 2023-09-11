import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video  pt-[20%]  px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1
        className="md:text-6xl text-2xl font-bold 
      "
      >
        {title}
      </h1>
      <p className="py-6 text-lg w-3/12 hidden md:inline-block">{overview}</p>
      <div className="">
        <button className="bg-white text-black py-1 md:py-4 px-3 md:px-16 text-sm md:text-xl rounded-lg hover:bg-opacity-80 md:mt-0 mt-6" >
          Play
        </button>
        <button className="bg-gray-700 text-white p-4 text-lg px-16 m-4 rounded-lg bg-opacity-50 hidden md:inline-block">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

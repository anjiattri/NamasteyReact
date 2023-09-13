import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBEVIDEO_URL } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBEVIDEO_URL);
    const json = await data.json();
    setVideos(json?.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos?.map((video) => (
        <Link to={'/watch?v='+video.id} className="cursor-pointer">
          <VideoCard videoData={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;

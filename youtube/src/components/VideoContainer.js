import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBEVIDEO_URL } from "../utils/constants";
import VideoCard, { TrendingVideoCard } from "./VideoCard";
import VideoCardSkeleton from "./shimmer/VideoCardSkeleton";

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBEVIDEO_URL);
    const json = await data.json();
    setVideos(json?.items);
    setLoading(false);
  };
  return (
    <>
      {loading ? (
        <VideoCardSkeleton />
      ) : (
        <div className="flex flex-wrap">
          <TrendingVideoCard videoData={videos ? videos[0] : []} />
          {videos?.map((video) => (
            <Link to={"/watch?v=" + video.id} className="cursor-pointer">
              <VideoCard videoData={video} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default VideoContainer;

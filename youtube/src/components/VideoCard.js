import React from "react";

const VideoCard = ({ videoData }) => {
  const { snippet, statistics } = videoData;
  const { channelTitle, thumbnails, title } = snippet;
  return (
    <div className="p-2 m-6 w-80 shadow">
      <img className="rounded-lg" src={thumbnails?.high?.url} alt="thumbnail" />
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>Views: {statistics?.viewCount}</li>
      </ul>
    </div>
  );
};
export const TrendingVideoCard = ({ videoData }) => {
  return (
    <div className="p-1 m-1">
      <h1 className="font-bold bg-red-600 text-white w-20 rounded-lg p-2 absolute">Trending</h1>
      <VideoCard videoData={videoData} />;
    </div>
  );
};
export default VideoCard;

import React from "react";

const VideoCard = ({ videoData }) => {
  const { snippet, statistics } = videoData;
  const { channelTitle, thumbnails, title } = snippet;
  console.log(snippet);
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

export default VideoCard;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../redux/appSlice";
import { YTUBE_VIDEO_ID_URL } from "../utils/constants";

const VideoWatch = () => {
  const [searchParam] = useSearchParams();
  const [video, setVideo] = useState(null);
  const videoId = searchParam.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getVideoById(videoId);
  }, []);

  const getVideoById = async (id) => {
    const data = await fetch(YTUBE_VIDEO_ID_URL + `&id=${id}`);
    const json = await data.json();
    setVideo(json?.items[0]);
  };
  return (
    <div className="px-5 ">
      <h1 className="font-bold text-3xl p-2 m-2">{video?.snippet?.title}</h1>
      <iframe
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/" + videoId + "?&autoplay=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <h1 className="font-bold text-3xl p-2 m-2">
        {video?.snippet?.channelTitle}
      </h1>

      <p className=" p-2 m-2">{video?.snippet?.description}</p>
    </div>
  );
};

export default VideoWatch;
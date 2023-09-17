import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../redux/appSlice";
import { YTUBE_VIDEO_ID_URL } from "../utils/constants";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

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
    <div className="flex flex-col w-full">
      <h1 className="font-bold text-3xl p-2 m-2 w-[1200px]">
        {video?.snippet?.title}
      </h1>
      <div className="px-5 flex w-full">
        <div>
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

          <p className=" p-2 m-2 text-gray-700 w-[1200px]">
            {video?.snippet?.description}
          </p>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default VideoWatch;

import React from "react";

const VideoCardSkeleton = () => {
  return (
    <div className="flex flex-wrap">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((ele) => (
        <Card key={ele}/>
      ))}
    </div>
  );
};

const Card = () => {
  return <div className="bg-gray-200 p-2 m-6 w-80 h-64 shadow "></div>;
};

export default VideoCardSkeleton;

import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-200 p-2 rounded-lg my-2">
      <img
        className="h-12 w-12 m-3"
        src="http://pluspng.com/img-png/user-png-icon-download-icons-logos-emojis-users-2240.png"
        alt="user"
      />
      <div className="p-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;

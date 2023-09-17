import React from "react";
import CommentList from "./CommentList";
const CommentsData = [
  {
    name: "Anjali",
    text: "Lorem ipsum mdnjw h",
    replies: [
      {
        name: "akshay",
        text: "Lorem ipsum mdnjw h",
        replies: [],
      },
      {
        name: "avi",
        text: "Lorem ipsum mdnjw h",
        replies: [
          {
            name: "nested",
            text: "Lorem ipsum mdnjw h",
            replies: [
              {
                name: "Honey",
                text: "Lorem ipsum mdnjw h",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Nidhi",
    text: "Lorem ipsum mdnjw h",
    replies: [],
  },
];
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments</h1>
      <CommentList comments={CommentsData} />
      {/* <Comment data={CommentsData[0]} /> */}
    </div>
  );
};

export default CommentsContainer;

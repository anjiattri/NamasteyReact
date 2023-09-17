import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((ele, index) => {
        return (
          <div>
            <Comment key={index} data={ele} />
            <div className="pl-5 border border-l-black">
              <CommentList comments={ele.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;

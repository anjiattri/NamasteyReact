import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello world using cnd link"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

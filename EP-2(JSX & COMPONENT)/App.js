import React from "react";
import ReactDOM from "react-dom/client";

//react element
const heading = React.createElement("h1", { id: "heading" }, "this is heading");

const JSXHeading = <h1>React</h1>;

//react component
const Title = () => <h1>Title</h1>;
const HeadingComponent = () => (
  <div>
    <Title />
    {JSXHeading}
    {heading}
    <h1>Hi Anjali</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

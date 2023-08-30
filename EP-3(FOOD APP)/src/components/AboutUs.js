import React from "react";
import User from "./User";

// function AboutUs() {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <User name="Anjali Function" location="delhi" />
//     </div>
//   );
// }

// export default AboutUs;

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent componentDidMount");
  }
  render() {
    console.log("parent render");

    return (
      <div>
        <h1>About Us</h1>
        <User name="Avi " location="bangore" />
        <User name="Anjali " location="delhi" />
      </div>
    );
  }
}
export default AboutUs;

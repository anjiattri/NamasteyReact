import React from "react";
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Test",
        avatar_url:
          "http://www.natrajaatachakki.com/uploads/testimonial/Dummy_Photo_Ladies_jpg.png",
      },
    };
    console.log(this.props.name, "child constructor");
  }

  async componentDidMount() {
    console.log(this.props.name, "child componentDidMount");
    const data = await fetch(
      `https://api.github.com/users/${this.props.username}`
    );
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log(this.props.name, "child render");
    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name : {name}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}
export default User;

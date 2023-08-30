import React from "react";
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log(this.props.name, "child constructor");
  }

  componentDidMount() {
    console.log(this.props.name, "child componentDidMount");
  }
  render() {
    console.log(this.props.name, "child render");

    const { name, location } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Count :{count}</h3>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}
export default User;

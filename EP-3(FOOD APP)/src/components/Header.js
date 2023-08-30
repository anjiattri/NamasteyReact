import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const logo = require("../../assets/images/logo.png");
function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onlineStatus = useOnlineStatus();
  const dotClass = onlineStatus ? "online-dot" : "offline-dot";

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status <span className={`status-dot ${dotClass}`}></span>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              setIsLoggedIn((prevState) => !prevState);
            }}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;

import React, { useState } from "react";
import { BG_URL } from "../utils/constants";
import Header from "./Header";

const Login = () => {
  const [isSignIn, SetIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    SetIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="background" />
      </div>
      <form className="p-12 absolute   w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-black bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full IName"
            className="p-4 my-4 w-full bg-gray-800 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
        />
        <button className="p-4 my-4 bg-red-600 w-full font-bold rounded-lg">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix ? Sign Up now"
            : "Already registered ? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;

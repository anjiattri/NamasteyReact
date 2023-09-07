import { signOut } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { auth } from "../utils/firebase";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        //dont have to dispatch as it has been in body when state change
      })
      .catch((err) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-full  px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex p-2">
          <img className="w-14 h-14 " src={user?.photoURL} alt="user" />
          <button
            className=" rounded-lg text-white font-bold m-4"
            onClick={handleLogout}
          >
            LOGOUT
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

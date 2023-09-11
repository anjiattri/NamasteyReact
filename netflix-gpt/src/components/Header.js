import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeLanguage } from "../redux/configSlice";
import { toggleGPTSearchView } from "../redux/gptSlice";
import { addUser, removeUser } from "../redux/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { auth } from "../utils/firebase";

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt?.showGPTSearch);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  //put in header as it will be there always-navigate will be from here as not anywhere else
  //onAuthStateChanged is event listener
  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubsribe onAuthStateChanged when component onmounts
    return () => {
      unsubsribe();
    };
  }, []);

  const handleGPTClick = () => {
    dispatch(toggleGPTSearchView());
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        //dont have to dispatch as it has been in body when state change
      })
      .catch((err) => {
        navigate("/error");
      });
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-full  px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col justify-between md:flex-row">
      <img className="w-44 mx-auto md:mx-0" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex p-2 justify-between">
          {showGPTSearch && (
            <select
              className="py-2 px-4 m-2 bg-gray-800 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((ele) => (
                <option key={ele.name} value={ele.identifier}>
                  {ele.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="py-2 px-4 m-2 bg-blue-800 text-white rounded-lg mx-4 my-2"
            onClick={handleGPTClick}
          >
            {showGPTSearch ? "Home" : "GPT Search"}
          </button>
          <img className="w-14 h-14 hidden md:block" src={user?.photoURL} alt="user" />
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

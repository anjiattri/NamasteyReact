import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/appSlice";
import { YTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState("");

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const fetchSearchText = async () => {
    const data = await fetch(YTUBE_SEARCH_API + searchText);
    const json = await data.json();
    console.log("json", json[1]);
    setSearchData(json[1]);
  };
  useEffect(() => {
    fetchSearchText();
  }, [searchText]);

  console.log("search", searchText);
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          className="h-10 cursor-pointer"
          alt="menu"
          src="https://cdn2.iconfinder.com/data/icons/most-useful-icons-4/50/HAMBURGER_MENU-512.png"
          onClick={toggleMenuHandler}
        />
        <a href="/">
          <img
            className="h-10"
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2013-2015.png"
            alt="logo"
          />
        </a>
      </div>
      <div className="col-span-10">
        <input
          type="text"
          className="border border-gray-400 w-1/2 px-10 rounded-l-full p-2"
          value={searchText}
          onChange={handleSearch}
        />
        <button className=" border border-gray-400 p-2 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-10"
          src="http://pluspng.com/img-png/user-png-icon-download-icons-logos-emojis-users-2240.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
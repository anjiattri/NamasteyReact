import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RESTRAUNT_API } from "./../utils/constants";
import useOnlineStatus from "./../utils/useOnlineStatus";
import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";

function Body() {
  const [listOfRestraunts, setListOfRestraunts] = useState([]);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTRAUNT_API);
    const json = await data.json();
    const resList =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestraunts(resList);
    setFilteredRestraunts(resList);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>Looks like you are offline!Please check your internet connection!</h1>
    );
  }

  return listOfRestraunts?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              let filteredList = listOfRestraunts?.filter((ele) => {
                return ele.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestraunts(filteredList);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = listOfRestraunts?.filter((ele) => {
              return ele.info.avgRating > 4;
            });
            setFilteredRestraunts(filteredList);
          }}
        >
          Top Rated Restraunts
        </button>
      </div>
      <div className="restro-container">
        {filteredRestraunts?.map((ele) => {
          return (
            <Link to={`/restraunts/${ele.info.id}`} key={ele.info.id}>
              <RestroCard resData={ele} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Body;

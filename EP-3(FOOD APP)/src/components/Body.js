import React, { useEffect, useState } from "react";
import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";
import { RESTRAUNT_API } from "../utils/constants";
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
              let filteredList = listOfRestraunts.filter((ele) => {
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
            let filteredList = listOfRestraunts.filter((ele) => {
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
          return <RestroCard key={ele.info.id} resData={ele} />;
        })}
      </div>
    </div>
  );
}

export default Body;

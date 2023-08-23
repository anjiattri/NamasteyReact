import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function RestrauntMenu() {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.470100999581337&lng=77.07347486168146&restaurantId=39284&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setMenuData(json);
    console.log(json);
  };

  return menuData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>Name of the restraunt :{menuData?.data?.cards?.[0]?.card?.card?.info?.name}</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Coke</li>
        <li>Burger</li>
        <li>Momos</li>
      </ul>
    </div>
  );
}

export default RestrauntMenu;

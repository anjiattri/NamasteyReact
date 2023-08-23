import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
function RestrauntMenu() {
  const [menuData, setMenuData] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(`${MENU_API}&restaurantId=${resId}`);
    const json = await data.json();
    setMenuData(json);
  };

  if (menuData?.length === 0) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    menuData?.data?.cards?.[0]?.card?.card?.info;
  const { itemCards } =
    menuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")}- {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((ele) => {
          return (
            <li key={ele.card.info.id}>
              {ele?.card?.info?.name}- Rs {ele.card.info.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RestrauntMenu;

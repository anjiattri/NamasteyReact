import React from "react";
import { CDN_URL } from "../utils/constants";
const styleCards = {
  backgroundColor: "#f0f0f0",
};

function RestroCard(props) {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;
  const { deliveryTime } = sla;
  return (
    <div className="res-card" style={styleCards}>
      <img
        className="restro-img"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
}

export default RestroCard;

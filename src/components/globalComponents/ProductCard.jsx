import React from "react";
import "../globalComponents/styles/ProductCard.css";
import fullAirpodsMax from "../Home/images/fullAirpodsMax.png";
import { CiHeart } from "react-icons/ci";

export function ProductCard() {
  return (
    <div className="productCard">
      <div className="productCardIcon">
        <CiHeart className="likeIcon" />
      </div>
      <div className="productCardImage">
        <img src={fullAirpodsMax} />
      </div>
      <div className="productCardContent">
        <p className="productCardName">AirPods Max Silver</p>
        <p className="productCardCost">$549</p>
      </div>

      <button className="buyNowButton">Buy Now</button>
    </div>
  );
}

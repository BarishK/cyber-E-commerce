import React from "react";
import "../globalComponents/styles/ProductCard.css";
import { CiHeart } from "react-icons/ci";

export function ProductCard({ product }) {
  return (
    <div className="productCard">
      <div className="productCardIcon">
        <CiHeart className="likeIcon" />
      </div>
      <div className="productCardImage">
        <img src={product?.image} />
      </div>
      <div className="productCardContent">
        <p className="productCardName">{product?.title}</p>
        <p className="productCardCost">${product?.price}</p>
      </div>

      <button className="buyNowButton">Buy Now</button>
    </div>
  );
}

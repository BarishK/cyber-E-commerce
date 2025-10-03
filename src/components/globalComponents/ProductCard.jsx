import React, { useState } from "react";
import "../globalComponents/styles/ProductCard.css";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useProductId } from "../../context/productId";

export function ProductCard({ product, id }) {
  const { setProductId } = useProductId();
  const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate(`/product/${id}`);
  //   setProductId(id);
  // };

  return (
    <a className="productCard" href={`/product/${id}`}>
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
    </a>
  );
}

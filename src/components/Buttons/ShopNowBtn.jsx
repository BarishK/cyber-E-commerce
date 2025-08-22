import React from "react";
import { NavLink } from "react-router-dom";

export function ShopNowBtn() {
  const shopNowButtonStyle = {
    padding: "16px 56px",
    width: "186px",
    height: "56px",
    background: "none",
    border: "1px solid white",
    borderRadius: "6px",
    color: "white",
    fontSize: "16px",
    textWrap: "nowrap",
    cursor: "pointer",
  };

  return (
    <NavLink to={"/products"}>
      <button style={shopNowButtonStyle}>Shop Now</button>
    </NavLink>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";

export function ShopNowBtnDark() {
  const shopNowButtonStyle = {
    textAlign: "center",
    padding: "16px 56px",
    width: "186px",
    height: "56px",
    background: "none",
    border: "1px solid black",
    borderRadius: "6px",
    color: "black",
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

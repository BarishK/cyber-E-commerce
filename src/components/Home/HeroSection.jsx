import React from "react";
import "./style/HeroSection.css";
import IphoneImage from "./images/IphoneImage.png";
import { ShopNowBtn } from "../Buttons/ShopNowBtn";

export function HeroSection() {
  return (
    <div className="heroSection container">
      <div className="heroContent">
        <h3>Pro.Beyond.</h3>
        <h1>
          IPhone 14 <b>Pro</b>
        </h1>
        <p>Created to change everything for the better.For everyone</p>
        <ShopNowBtn />
      </div>
      <div className="heroImage">
        <img src={IphoneImage} />
      </div>
    </div>
  );
}

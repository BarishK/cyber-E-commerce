import React from "react";
import PlayStation from "./images/PlayStation.png";
import AirpodsMax from "./images/AirpodsMax.png";
import VisionPro from "./images/VisionPro.png";
import MacBookAir from "./images/MacBookAir.png";
import fullAirpodsMax from "./images/fullAirpodsMax.png";
import fullVisionPro from "./images/fullVisionPro.png";
import fullPlayStation from "./images/fullPlayStation.png";
import fullMacBookAir from "./images/fullMacBookAir.png";

import "./style/NewProductsSection.css";

import { ShopNowBtnDark } from "../Buttons/ShopNowBtnDark";

export function NewProductsSection() {
  return (
    <section className="newProducts">
      <div className="newProductsStart">
        <div className="newProduct ps5">
          <div>
            <img src={PlayStation} />
            <img src={fullPlayStation} className="mobileImage" />
          </div>
          <div className="newProductContent">
            <h2>
              Playstation <b>5</b>
            </h2>
            <p>
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </p>
          </div>
        </div>
        <div className="newProductsStartBottom">
          <div className="newProduct airpodsMax">
            <div>
              <img src={AirpodsMax} />
              <img src={fullAirpodsMax} className="mobileImage" />
            </div>
            <div className="newProductContent">
              <h3>
                Apple Airpods <b>Max</b>
              </h3>
              <p>Computational audio. Listen, it's powerful</p>
            </div>
          </div>
          <div className="newProduct visionPro">
            <div>
              <img src={VisionPro} />
              <img src={fullVisionPro} className="mobileImage" />
            </div>
            <div className="newProductContent">
              <h3>
                Apple Vision <b>Pro</b>
              </h3>
              <p>An immersive way to experience entertainment</p>
            </div>
          </div>
        </div>
      </div>
      <div className="newProductsEnd">
        <div className="newProduct macbookAir">
          <div className="newProductContent">
            <div>
              <img src={fullMacBookAir} className="mobileImage" />
            </div>
            <h3>
              Macbook <b>Air</b>
            </h3>
            <p>
              The new 15‑inch MacBook Air makes room for more of what <br /> you
              love with a spacious Liquid Retina display.
            </p>
            <ShopNowBtnDark />
          </div>
          <div>
            <img src={MacBookAir} />
          </div>
        </div>
      </div>
    </section>
  );
}

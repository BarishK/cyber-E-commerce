import React from "react";
import { ShopNowBtnDark } from "../Buttons/ShopNowBtnDark";
import HuawieBudsBanner from "./images/HuawieBudsBanner.png";
import IPadBanner from "./images/IpadBanner.png";
import GalaxyBanner from "./images/GalaxyBanner.png";
import MacbookBanner from "./images/MacbookBanner.png";
import "./style/PopularProductsSection.css";
import { ShopNowBtn } from "../Buttons/ShopNowBtn";

export function PopularProductsSection() {
  return (
    <section className="popularProductsSection">
      <div className="popularProduct">
        <div className="popularProductImages">
          <img
            src={HuawieBudsBanner}
            style={{ width: "280px", height: "260px" }}
          />
        </div>
        <div className="popularProductContent">
          <h3>PopularProducts</h3>
          <p>
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <ShopNowBtnDark />
        </div>
      </div>
      <div className="popularProduct">
        <div className="popularProductImages">
          <img src={IPadBanner} style={{ width: "280px", height: "260px" }} />
        </div>
        <div className="popularProductContent">
          <h3>IPad Pro</h3>
          <p>
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <ShopNowBtnDark />
        </div>
      </div>
      <div className="popularProduct">
        <div className="popularProductImages" style={{ background: "#EAEAEA" }}>
          <img src={GalaxyBanner} style={{ width: "280px", height: "260px" }} />
        </div>
        <div className="popularProductContent">
          <h3>Samsung Galaxy</h3>
          <p>
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <ShopNowBtnDark />
        </div>
      </div>
      <div
        className="popularProduct"
        style={{ background: "#2C2C2C", color: "white" }}
      >
        <div className="popularProductImages">
          <img
            src={MacbookBanner}
            style={{ width: "280px", height: "260px" }}
          />
        </div>
        <div className="popularProductContent">
          <h3>MacbookPro</h3>
          <p>
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <ShopNowBtn />
        </div>
      </div>
      <div className="popularProduct"></div>
      <div className="popularProduct"></div>
      <div className="popularProduct"></div>
    </section>
  );
}

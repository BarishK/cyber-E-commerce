import React from "react";
import { ShopNowBtnDark } from "../Buttons/ShopNowBtnDark";
import HuawieBuds from "../Home/images/HuawieBuds.png";
import SmartWatch from "../Home/images/SmartWatch.png";
import "./style/PopularProductsSection.css";

export function PopularProductsSection() {
  return (
    <section className="popularProductsSection">
      <div className="popularProduct">
        <div className="popularProductImages">
          <img src={HuawieBuds} style={{ width: "280px", height: "260px" }} />
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
          <img src={HuawieBuds} style={{ width: "280px", height: "260px" }} />
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
        <div className="popularProductImages">
          <img src={HuawieBuds} style={{ width: "280px", height: "260px" }} />
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
      <div className="popularProduct">
        <div className="popularProductImages">
          <img src={HuawieBuds} style={{ width: "280px", height: "260px" }} />
        </div>
        <div className="popularProductContent">
          <h3>MacbookPro</h3>
          <p>
            iPad combines a magnificent 10.2-inch Retina display, incredible
            performance, multitasking and ease of use.
          </p>
          <ShopNowBtnDark />
        </div>
      </div>
      <div className="popularProduct"></div>
      <div className="popularProduct"></div>
      <div className="popularProduct"></div>
    </section>
  );
}

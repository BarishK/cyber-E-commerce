import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { RiHeadphoneLine } from "react-icons/ri";
import { GiConsoleController } from "react-icons/gi";
import "./style/BrowseCategorySection.css";

export function BrowseCategorySection() {
  return (
    <section
      className="container browseCategorySection"
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
    >
      <div className="browseCategoryUpper">
        <h3 style={{ fontSize: "28px", fontWeight: "200" }}>
          Browse By Category
        </h3>
        <div className="leftRightIcons">
          <FaAngleLeft style={{ width: "32px", height: "32px" }} />
          <FaAngleRight style={{ width: "32px", height: "32px" }} />
        </div>
      </div>
      <div className="browseCategoryBottom">
        <a href="/" className="categoryItem">
          <IoPhonePortraitOutline className="categoryIcon" />
          <p>Phones</p>
        </a>
        <a href="/" className="categoryItem">
          <BsSmartwatch className="categoryIcon" />
          <p>Smart Watches</p>
        </a>
        <a href="/" className="categoryItem">
          <IoCameraOutline className="categoryIcon" />
          <p>Cameras</p>
        </a>
        <a href="/" className="categoryItem">
          <RiHeadphoneLine className="categoryIcon" />
          <p>Headphones</p>
        </a>
        <a href="/" className="categoryItem">
          <RiComputerLine className="categoryIcon" />
          <p>Computers</p>
        </a>
        <a href="/" className="categoryItem">
          <GiConsoleController className="categoryIcon" />
          <p>Gaming</p>
        </a>
      </div>
    </section>
  );
}

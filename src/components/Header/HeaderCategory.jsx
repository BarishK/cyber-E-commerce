import React from "react";
// ICONS
import { IoPhonePortraitOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { RiHeadphoneLine } from "react-icons/ri";
import { GiConsoleController } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export function HeaderCategory() {
  return (
    <div className="categories">
      <nav className="navbar">
        <NavLink to="/" className="navLink">
          <IoPhonePortraitOutline className="navLinkIcon" />
          Phones
        </NavLink>
        <NavLink to="/" className="navLink">
          <RiComputerLine className="navLinkIcon" />
          Computers
        </NavLink>
        <NavLink to="/" className="navLink">
          <BsSmartwatch className="navLinkIcon" />
          Smart Watches
        </NavLink>
        <NavLink to="/" className="navLink">
          <IoCameraOutline className="navLinkIcon" />
          Cameras
        </NavLink>
        <NavLink to="/" className="navLink">
          <RiHeadphoneLine className="navLinkIcon" />
          Headphones
        </NavLink>
        <NavLink to="/" className="navLink">
          <GiConsoleController className="navLinkIcon" />
          Gaming
        </NavLink>
      </nav>
    </div>
  );
}

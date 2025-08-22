import { HeaderCategory } from "./HeaderCategory";
import HeaderLogo from "../../logos/HeaderLogo.png";
// Icons
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
// /////
import "./Header.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Header() {
  const [isActive, setIsActive] = useState(true);

  const handleHamburger = (e) => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="header">
      <header>
        <div className="headerLogo">
          <img src={HeaderLogo} />
        </div>
        <div className="headerSearchInput">
          <CiSearch className="inputIcon" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="navbarBars">
          <button
            className="barIconButton"
            onClick={(event) => handleHamburger(event)}
          >
            <FaBars className="barIcon" />
          </button>
        </div>
        <div className="headerLinks">
          <div className="headerLinkGroup">
            <a href="/" style={{ opacity: "100%" }}>
              Home
            </a>
            <a to="/">About</a>
            <a href="/">Contact Us</a>
            <a href="/">Blog</a>
          </div>
        </div>
        <div className="headerIcons">
          <a href="/">
            <CiHeart className="headerIcon" />
          </a>
          <NavLink to="/">
            <CiShoppingCart className="headerIcon" />
          </NavLink>
          <a href="/">
            <IoPersonOutline className="headerIcon" />
          </a>
        </div>
      </header>
      <div className={`hamburgerMenu ${isActive ? "hamburgerMenuActive" : ""}`}>
        <div className="hamburgerLinkGroup">
          <a href="/" className="hamburgerLink">
            Home
          </a>
          <a href="/" className="hamburgerLink">
            About
          </a>
          <a href="/" className="hamburgerLink">
            Contact Us
          </a>
          <a href="/" className="hamburgerLink">
            Blog
          </a>
        </div>
        <div className="hamburgerIcons">
          <a href="/">
            <CiHeart className="hamburgerIcon" />
          </a>
          <a href="/">
            <CiShoppingCart className="hamburgerIcon" />
          </a>
          <a href="/">
            <IoPersonOutline className="hamburgerIcon" />
          </a>
        </div>
      </div>
      <HeaderCategory />
    </div>
  );
}

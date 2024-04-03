import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch, FaRegUserCircle } from "react-icons/fa";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { TbApps } from "react-icons/tb";
import { IoPersonOutline } from "react-icons/io5";
import { MdEmail, MdNotificationsActive } from "react-icons/md";
import "./navBar.scss";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__section navbar__section--left">
        <Link to="/" className="navbar__brand">
          <span>Social</span>
        </Link>
        <FaHome className="navbar__icon" />
        <WiMoonAltFirstQuarter className="navbar__icon" />
        <TbApps className="navbar__icon" />
        <div className="navbar__search">
          <FaSearch className="navbar__icon" />
          <input type="text" placeholder="Search ..." className="navbar__input" />
        </div>
      </div>
      <div className="navbar__section navbar__section--right">
        <IoPersonOutline className="navbar__icon" />
        <MdEmail className="navbar__icon" />
        <MdNotificationsActive className="navbar__icon" />
        <div className="navbar__user">
          <FaRegUserCircle className="navbar__icon" />
          <span>John Doe</span>
        </div>
      </div>
    </nav>
  );
};

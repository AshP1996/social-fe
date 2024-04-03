import "./navBar.scss"
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { TbApps } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" >
        <span>Social</span>
        </Link>
        <FaHome />
        <WiMoonAltFirstQuarter />
        <TbApps />
        <div className="search">
          <FaSearch />
          <input type="text" placeholder="Search ..." />
        </div>
      </div>
      <div className="right">
        <IoPersonOutline />
        <MdEmail />
        <MdNotificationsActive />
        <div className="user">
          <FaRegUserCircle />
          {/* <img src="" alt=" " /> */}
          <span>Jhaon Doe</span>
        </div>
      
      </div>
    </div>
  )
}

import "./leftBar.scss"
import { FaRegUserCircle } from "react-icons/fa";
import { MdGroups as groupIcon } from "react-icons/md";
import { FaSitemap } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiMemoriesFill } from "react-icons/ri";


export const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="continer">
        <div className="menu">
          <div className="user">
            <FaSitemap />
            {/* <img src="" alt=" " /> */}
           
            <span>Jhon Doe</span>
          </div>
          <hr />
          <div className="items">
            <FaSitemap />
            <span>Friends</span>
          </div>
          <div className="groups">
            <MdGroups />
            <span>Groups</span>
          </div>
          <div className="watch">
            <MdOutlineWatchLater/>
            <span>watch</span>
          </div>
          <div className="memories">
            <RiMemoriesFill/>
            <span>memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
        </div>
      </div>

    </div>
  )
}

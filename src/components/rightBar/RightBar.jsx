import "./rightBar.scss"

import { MdGroups as GroupIcon } from "react-icons/md";
import { FaSitemap as FriendsIcon } from "react-icons/fa";
import { MdOutlineWatchLater as WatchLaterIcon } from "react-icons/md";
import { RiMemoriesFill as MemoriesIcon } from "react-icons/ri";

export const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="upperRight">
        <div className="upperItems">
            <FriendsIcon />
            <span>Friends</span>
          </div>
          <div className="upperItems">
            <GroupIcon />   
            <span>Groups</span>       
          </div>
          <div className="upperItems">
            <WatchLaterIcon />
            <span>Watch</span>
          </div>
          <div className="upperItems">
            <MemoriesIcon />
            <span>Memories</span>
          </div>
          <div className="upperItems">
            <MemoriesIcon />
            <span>Memories</span>
          </div>
      </div>
      <div className="lowerRight">
        <div className="lowerItems">
            <MemoriesIcon />
            <span>Memories</span>
          </div>
          <div className="lowerItems">
            <MemoriesIcon />
            <span>Memories</span>
          </div>
          <div className="lowerItems">
            <MemoriesIcon />
            <span>Memories</span>
          </div>
      </div>
    </div>
  )
}

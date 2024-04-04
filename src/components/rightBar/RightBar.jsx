import React from 'react';
import { MdGroups as GroupIcon, MdOutlineWatchLater as WatchLaterIcon } from "react-icons/md";
import { FaSitemap as FriendsIcon } from "react-icons/fa";
import { RiMemoriesFill as MemoriesIcon } from "react-icons/ri";
import "./RightBar.scss";

export const RightBar = () => {
  return (
    <aside className="rightbar">
      <div className="rightbar__section rightbar__section--upper">
        {/* <div className="rightbar__userSection">
          <img src="" alt="User" className="rightbar__userImg"/>
          <span>Jhon Doe</span>
        </div>  */}
        {/* <hr className="rightbar__divider"/>        */}
        <div className="rightbar__item">
          <FriendsIcon className="rightbar__icon"/>
          <span>Friends</span>
        </div>
        <div className="rightbar__item">
          <GroupIcon className="rightbar__icon"/>   
          <span>Groups</span>       
        </div>
        <div className="rightbar__item">
          <WatchLaterIcon className="rightbar__icon"/>
          <span>Watch</span>
        </div>
        <div className="rightbar__item">
          <MemoriesIcon className="rightbar__icon"/>
          <span>Memories</span>
        </div>
      </div>

      <div className="rightbar__section rightbar__section--lower">
        <h1>Hello</h1>
      </div>
    </aside>
  );
};

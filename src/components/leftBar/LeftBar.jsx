import React from 'react';
import { MdGroups as GroupIcon, MdOutlineWatchLater as WatchLaterIcon } from "react-icons/md";
import { FaSitemap as FriendsIcon } from "react-icons/fa";
import { RiMemoriesFill as MemoriesIcon } from "react-icons/ri";
import "./LeftBar.scss";

export const LeftBar = () => {
  return (
    <aside className="leftBar">
      <div className="leftBar__section leftBar__section--upper">
        {/* <div className="leftBar__userSection">
          <img src="" alt="User" className="leftBar__userImg"/>
          <span>Jhon Doe</span>
        </div>  */}
        {/* <hr className="leftBar__divider"/>        */}
        <div className="leftBar__item">
          <FriendsIcon className="leftBar__icon"/>
          <span>Friends</span>
        </div>
        <div className="leftBar__item">
          <GroupIcon className="leftBar__icon"/>   
          <span>Groups</span>       
        </div>
        <div className="leftBar__item">
          <WatchLaterIcon className="leftBar__icon"/>
          <span>Watch</span>
        </div>
        <div className="leftBar__item">
          <MemoriesIcon className="leftBar__icon"/>
          <span>Memories</span>
        </div>
      </div>

      <div className="leftBar__section leftBar__section--lower">
        <h1>Hello</h1>
      </div>
    </aside>
  );
};

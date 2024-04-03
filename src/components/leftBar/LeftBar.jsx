import "./leftBar.scss"

import { MdGroups as GroupIcon } from "react-icons/md";
import { FaSitemap as FriendsIcon } from "react-icons/fa";
import { MdOutlineWatchLater as WatchLaterIcon } from "react-icons/md";
import { RiMemoriesFill as MemoriesIcon } from "react-icons/ri";


export const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="upper">
        <div className="userSection">
          <img src="" alt="" />
          <span>Jhon Doe</span>
        </div> 
        <hr></hr>       
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
      </div>

      <div className="lower">
        <h1>Hello</h1>
      </div>

    </div>
  )
}


  // <div className="continer">
  //         <div className="menu">
  //           <div className="user">
  //             <FaRegUserCircle />
  //             {/* <img src="" alt=" " /> */}
            
  //             <span>Jhon Doe</span>
  //           </div>
  //           <hr />
  //           <div className="items">
  //             <FaSitemap />
  //             <span>Friends</span>
  //           </div>
  //           <div className="groups">
  //             <MdGroups />
  //             <span>Groups</span>
  //           </div>
  //           <div className="watch">
  //             <MdOutlineWatchLater/>
  //             <span>watch</span>
  //           </div>
  //           <div className="memories">
  //             <RiMemoriesFill/>
  //             <span>memories</span>
  //           </div>
  //         </div>
  //         <hr />
  //         <div className="menu">
  //           <span>Your shortcuts</span>
  //         </div>
  //       </div>

import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

function Sidebar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        alt="spotify logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <string className="sidebar__title">PLAYLISTS</string>
      <hr />
    </div>
  );
}

export default Sidebar;

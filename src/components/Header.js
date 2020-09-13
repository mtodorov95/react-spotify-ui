import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

function Header({ spotify }) {
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for artists, songs and podcasts"
        />
      </div>
      <div className="header__right">
        <Avatar src="" alt="user avatar" />
        <h4>Username</h4>
      </div>
    </div>
  );
}

export default Header;

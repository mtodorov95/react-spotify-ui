import React from "react";
import { useStateValue } from "../StateProvider";
import "./Body.css";
import Header from "./Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ shownPlaylist }, dispatch] = useStateValue();

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={shownPlaylist?.images[0].url} alt="album cover" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>
            {shownPlaylist?.name ? shownPlaylist?.name : "Unnamed Playlist"}
          </h2>
          <p>
            {shownPlaylist?.description
              ? shownPlaylist?.description
              : "No description"}
          </p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" fontSize="large" />
          <FavoriteIcon />
          <MoreHorizIcon />
        </div>
        {shownPlaylist?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
        <div className="body__empty"></div>
      </div>
    </div>
  );
}

export default Body;

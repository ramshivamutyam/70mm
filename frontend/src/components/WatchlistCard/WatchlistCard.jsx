import React from "react";
import "./WatchlistCard.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { removeFromWatchList } from "../../features/watchlist/watchlistSlice";
function WatchlistCard(props) {
  const dispatch = useDispatch();
  function handleClick(event) {
    event.preventDefault();
    dispatch(removeFromWatchList(props.id));
  }
  return (
    <div className="watchlist_card">
      <img className="watchlist_card_image" alt={props.alt} src={props.image} />
      <div className="watchlist_card_rating">
        <span>Rating:{props.rating}/10</span>
      </div>
      <div className="watchlist_card_name">
        <strong>{props.name}</strong>
      </div>
      <div className="watchlist_card_remove">
        <button onClick={handleClick} className="button">
          <DeleteIcon />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
}

export default WatchlistCard;

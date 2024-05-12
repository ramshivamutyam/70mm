import React from "react";
import "./Card.css";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchList } from "../../features/watchlist/watchlistSlice";
function Card(props) {
  const [data, setData] = useState({
    id: props.id,
    alt: props.alt,
    src: props.image,
    rating: props.rating,
    name: props.name,
  });
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.status);
  function clickHandler(event) {
    event.preventDefault();
    if (authStatus) {
      dispatch(addToWatchList(data));
    } else {
      alert("Please Login");
    }
  }
  return (
    <div className="card">
      <img className="card_image" alt={props.alt} src={props.image} />
      <div className="card_rating">
        <span>Rating:{props.rating}/10</span>
      </div>
      <div className="card_name">
        <strong>{props.name}</strong>
      </div>
      <div className="card_watchlist">
        <button onClick={clickHandler} className="button">
          <AddIcon />
          <span>Watchlist</span>
        </button>
      </div>
    </div>
  );
}

export default Card;

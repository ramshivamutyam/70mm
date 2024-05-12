import React from "react";
import "./Watchlist.css";
import { useSelector } from "react-redux";
import WatchlistCard from "../WatchlistCard/WatchlistCard";
function Watchlist() {
  const data = useSelector((state) => {
    return state.watchlist.watchlists;
  });
  return data.length !== 0 ? (
    <div className="watch_list">
      {data.map((item) => (
        <WatchlistCard
          key={item.id}
          id={item.id}
          alt={item.alt}
          image={item.src}
          rating={item.rating}
          name={item.name}
        />
      ))}
    </div>
  ) : (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h3>your watchlist is empty</h3>
    </div>
  );
}

export default Watchlist;

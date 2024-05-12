import React from "react";
import "./PersonCard.css"
function PersonCard(props) {
  return (
    <div className="person_card">
      <img className="person_image" alt={props.alt} src={props.image} />
      <div className="person_name">
        <strong>{"Name : "+props.name}</strong>
      </div>
      <div className="person_popularity">
        <span>{"Popularity : "+props.popularity}</span>
      </div>
    </div>
  );
}

export default PersonCard;

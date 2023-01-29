import React from "react";

const Card = (props) => {
  let badgeText;
  if (props.card.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.card.location === "online") {
    badgeText = "ONLINE";
  } else {
    badgeText = props.card.location;
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.card.coverImg} alt="" />
      <div className="card--stats">
        <span>{props.card.stats.rating}</span>
        <span className="grey">({props.card.stats.reviewCount})</span>
        <span className="grey">.{props.card.location}</span>
      </div>
      <h1 className="card--title">{props.card.title}</h1>
      <p className="description">{props.card.description}</p>
      <p className="card--price">
        <b>${props.card.price}</b> / person
      </p>
    </div>
  );
};

export default Card;

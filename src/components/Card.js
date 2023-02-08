import React from "react";
import { AiFillStar } from "react-icons/ai";

const Card = ({
  openSpots,
  stats,
  coverImg,
  rating,
  reviewCount,
  location,
  title,
  description,
  price,
}) => {
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "online") {
    badgeText = "ONLINE";
  } else {
    badgeText = location;
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={coverImg} alt="" />
      <div className="card--stats">
        <span className="star">
          <AiFillStar />
        </span>
        <span>{stats.rating}</span>
        <span className="grey">({stats.reviewCount})</span>
        <span className="grey">.{location}</span>
      </div>
      <h1 className="card--title">{title}</h1>
      <p className="description">{description}</p>
      <p className="card--price">
        <b>${price}</b> / person
      </p>
    </div>
  );
};

export default Card;

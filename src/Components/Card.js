import React from "react";
import "./Card.css";
import items from "../ItemsArray";

function Card() {
  return (
    <div className="card">
      <img src={items[0].image} alt="image" />
      <div classname="card__info">
        <p className="card__title">{items[0].title}</p>
        <p className="card__rating">
          {Array(items[0].rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </p>
        <p className="card__price">
          <small>₹</small>
          <strong>{items[0].price}</strong>
        </p>
        <p className="card__button">Buy Now</p>
      </div>

    </div>
  );
}

export default Card;

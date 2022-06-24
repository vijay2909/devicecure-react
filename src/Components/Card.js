import React from "react";
import "./Card.css";
import items from "../ItemsArray";

function Card() {
  return (
    <div className="card">

    </div>
  );
}

export default Card;

{/* <div className="product">
      <div classname="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
          ))}
        </p>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div> */}
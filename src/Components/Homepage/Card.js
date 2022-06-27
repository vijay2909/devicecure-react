import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card__bg">
        <img src={props.image} alt="image" />
        <div classname="card__info">
          <p className="card__title">{props.title}</p>
          <p className="card__rating">
            {Array(props.rating)
              .fill()
              .map(() => (
                <p>⭐</p>
              ))}
          </p>
          <p className="card__price">
            <small>₹</small>
            <strong>{props.price}</strong>
          </p>
        </div>
        </div>
        <a href=""><p className="card__button">Buy Now</p></a>
        
      
    </div>
  );
}

export default Card;

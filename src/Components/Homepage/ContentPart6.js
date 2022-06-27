import React from "react";
import Card from "./Card";
import ArrowLink from "./ArrowLink";
import "./ContentPart6.css";
import cardItems from "../CardItems";

function ContentPart6() {
  return (
    <div className="contentPart6">
      <h1>Top Selling Stuff</h1>
      <div className="contentPart6__cards">
        {cardItems.map((e)=>{
          return(
          <Card 
          key={e.id}
          image={e.image}
          title={e.title}
          rating={e.rating}
          price={e.price}
          />
          )
        })}  
        <ArrowLink />
      </div>
    </div>
  );
}

export default ContentPart6;

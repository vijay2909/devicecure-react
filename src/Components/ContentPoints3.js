import React from "react";
import "./ContentPoints3.css"
import content from "../Homepage-content3";

function ContentPoints3() {
  return (
    content.map((e)=>(
      <div className="ContentPoints3">
      <div className="contentPoints3__heading">
        <span>{e.title}</span>
      </div>
      <div className="contentPoints3__points">
        <span className="point__number1">1</span>
        <span className="point__content">
          <strong>{e.pointStrong1}</strong>
          <small>{e.pointsmall1}</small>
        </span>
      </div>
      <div className="contentPoints3__points">
        <span className="point__number1">2</span>
        <span className="point__content">
        <strong>{e.pointStrong2}</strong>
          <small>{e.pointsmall2}</small>
        </span>
      </div>
      <div className="contentPoints3__points">
        <span className="point__number1">3</span>
        <span className="point__content">
        <strong>{e.pointStrong3}</strong>
          <small>{e.pointsmall3}</small>
        </span>
      </div>
      <div className="contentPoints3__points">
        <span className="point__number1">4</span>
        <span className="point__content">
        <strong>{e.pointStrong4}</strong>
          <small>{e.pointsmall4}</small>
        </span>
      </div>
    </div>
  ))
    
  );
}

export default ContentPoints3;

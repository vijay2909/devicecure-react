import React from "react";
import content from "../Homepage-content8";
import "./ContentPoints8.css";

function ContentPoints1() {
  return content.map((e) => (
    <div className="contentPoints8">
      <div className="contentPoints8__points">
        <span className="point__number">1</span>
        <span className="point__content">
          <strong>{e.pointStrong1}</strong>
          <small>{e.pointsmall1}</small>
        </span>
      </div>
      <div className="contentPoints8__points" style={{paddingRight: 37}}>
        <span className="point__number">2</span>
        <span className="point__content">
          <strong>{e.pointStrong2}</strong>
          <small>{e.pointsmall2}</small>
        </span>
      </div>
      <div className="contentPoints8__points">
        <span className="point__number">3</span>
        <span className="point__content">
          <strong>{e.pointStrong3}</strong>
          <small>{e.pointsmall3}</small>
        </span>
      </div>
      <div className="contentPoints8__points">
        <span className="point__number">4</span>
        <span className="point__content">
          <strong>{e.pointStrong4}</strong>
          <small>{e.pointsmall4}</small>
        </span>
      </div>
    </div>
  ));
}

export default ContentPoints1;

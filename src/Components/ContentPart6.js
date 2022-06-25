import React from "react";
import Card from "./Card";
import ArrowLink from "./ArrowLink";
import "./ContentPart6.css";

function ContentPart6() {
  return (
    <div className="contentPart6">
      <h1>Top Selling Stuff</h1>
      <div className="contentPart6__cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <ArrowLink />
      </div>
    </div>
  );
}

export default ContentPart6;

import React from "react";
import "./ContentPart9.css";
import Comment from "./Comment";
import CommentsArray from "../CommentsArray";

function ContentPart9() {
  return (
    <div>
      <h1>What Customers Say</h1>
      <div className="contentPart9">
        {CommentsArray.map((e) => {
          return (
            <Comment
              key={e.id}
              heading={e.heading}
              comment={e.comment}
              name={e.name}
              company={e.company}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ContentPart9;

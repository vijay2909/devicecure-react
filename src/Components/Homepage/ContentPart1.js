import React, {useState} from "react";
import ContentPoints1 from "./ContentPoints1";
import ContentBox from "./ContentBox";
import "./ContentPart1.css";

function ContentPart1(props) {
  return (
    <div className="contentPart1">
      <ContentPoints1 />
      <ContentBox brandName={props.brandName} setBrandName={props.setBrandName}
          modelName={props.modelName} setModelName={props.setModelName}
          multiIssue={props.multiIssue} setMultiIssue={props.setMultiIssue}/>
    </div>
  );
}

export default ContentPart1;

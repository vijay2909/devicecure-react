import React, {useState} from "react";
import ContentPart1 from "./ContentPart1";
import ContentPart2 from "./ContentPart2";
import ContentPart3 from "./ContentPart3";
import ContentPart4 from "./ContentPart4";
import ContentPart5 from "./ContentPart5";
import ContentPart6 from "./ContentPart6";
import ContentPart7 from "./ContentPart7";
import ContentPart8 from "./ContentPart8";
import ContentPart9 from "./ContentPart9";
import "./Content.css";
import "./Horizontalrule.css";



function Content(props) {
  return (
    <div className="content">

      <hr className="horizontalrule" />

      <div>
        <ContentPart1 brandName={props.brandName} setBrandName={props.setBrandName}
          modelName={props.modelName} setModelName={props.setModelName}
          multiIssue={props.multiIssue} setMultiIssue={props.setMultiIssue}/>
      </div>

      <hr className="horizontalrule" />

      <div>
        <ContentPart2 />
      </div>

      <hr className="horizontalrule" />

      <div>
        <ContentPart3 />
      </div>

      <hr className="horizontalrule" />

      <div>
        <ContentPart4 /> 
      </div>

      <hr className="horizontalrule" />

      <div>
      <ContentPart5 />
      </div>

      <hr className="horizontalrule" />

      <ContentPart6 />

      <hr className="horizontalrule" />

      <ContentPart7 />

      <hr className="horizontalrule" />

      <div>
        <ContentPart8 />
      </div>

      <hr className="horizontalrule" />

      <div>
        <ContentPart9 />
      </div>

    </div>
  );
}

export default Content;

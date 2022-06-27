import React from "react";
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



function Content() {
  return (
    <div className="content">
      <hr className="horizontalrule" />
      {/* Content Part 1-------START */}
      <div>
        <ContentPart1 />
      </div>
      {/* ------------------------- */}

      <hr className="horizontalrule" />

      {/* Content Part 2-------START */}
      <div>
        <ContentPart2 />
      </div>
      {/* ---------------------------*/}

      <hr className="horizontalrule" />

      {/* Content Part 3-------START */}
      <div>
        <ContentPart3 />
      </div>
      {/* ---------------------------*/}

      <hr className="horizontalrule" />

      {/* Content Part 4-------START */}

      <div>
        <ContentPart4 /> 
      </div>
      {/* ---------------------------*/}

      <hr className="horizontalrule" />

      {/* Content Part 5-------START */}
      <div>
      <ContentPart5 />
      </div>
      {/* ---------------------------*/}

      <hr className="horizontalrule" />

      {/* Content Part 6-------START */}
      <ContentPart6 />
      {/* ---------------------------*/}

      <hr className="horizontalrule" />

      {/* Content Part 7-------START */}
      <ContentPart7 />
      {/* ---------------------------*/}

      <hr className="horizontalrule" />

      {/* Content Part 8-------START */}
      <div>
        <ContentPart8 />
      </div>
      {/* ---------------------------*/}

      <hr className="horizontalrule" />

      {/* Content Part 9-------START */}
      <div>
        <ContentPart9 />
      </div>
      {/* ---------------------------*/}
    </div>
  );
}

export default Content;

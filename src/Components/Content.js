import React from "react";
import ContentPart1 from "./ContentPart1";
import ContentPart2 from "./ContentPart2";
import ContentPart3 from "./ContentPart3";
import ContentPart8 from "./ContentPart8";
import ContentPart9 from "./ContentPart9";
import "./Content.css";

import "./Content.css";
import Categories from "./Categories";
import "./Categories.css";
import "./Horizontalrule.css";
import DownloadApp from "./DownloadApp";
import ProtectionPlan from "./ProtectionPlan";

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
      <h1>Some Cool Categories</h1>
      <div>
        <Categories />
      </div>
      {/* ---------------------------*/}

      <hr className="horizontalrule" />

      {/* Content Part 5-------START */}
      <h1>Download Devicecure App</h1>
      <div>
        <DownloadApp />
      </div>
      {/* ---------------------------*/}


      <hr className="horizontalrule" />

      {/* Content Part 6-------START */}
      <h1>Top Selling Stuff</h1>
      <div>{/* sliding card content */}</div>
      {/* ---------------------------*/}

      <hr className="horizontalrule" />

      {/* Content Part 7-------START */}
      <h1>What Is Screen Propection Plan</h1>
      <div>
        <ProtectionPlan />
      </div>
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

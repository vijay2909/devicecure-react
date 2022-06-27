import React from "react";
import ImgSlider from "./ImgSlider";
import Content from "./Content";
import Footer from "./Footer";
import Header1 from "./Header1";
import Header2 from "./Header2";

function Homepage() {
  return (
    <div>
      <Header1 />
      <Header2 />
      <div className="homepage" style={{ overflow: "hidden" }}>
        <ImgSlider />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;

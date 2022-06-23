import React from "react";
import "./Slider1.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slider1() {
  let settings = {
    dots: true,
    Infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidersToScroll: 1,
    autoplay: true,
  };

  return <Slider className="Slider1" {...settings}>
    <div className="Slider1__division">
      <img className="Slider1__img" src="" alt="Image 1"/>
    </div>
    <div className="Slider1__division">
      <img className="Slider1__img" src="" alt="Image 2"/>
    </div>
    <div className="Slider1__division">
      <img className="Slider1__img" src="" alt="Image 3"/>
    </div>
    <div className="Slider1__division">
      <img className="Slider1__img" src="" alt="Image 4"/>
    </div>
  </Slider>;
}

export default Slider1;

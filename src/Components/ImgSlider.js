import React from "react";
import "./ImgSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
  let settings = {
    dots: true,
    Infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidersToScroll: 1,
    autoplay: true,
  };
// slider dimentions--1440/400px

  return <Slider className="ImgSlider" {...settings}>
     <div className="ImgSlider__division">
      <img className="ImgSlider__img" src=""  alt="Image 1"/>
    </div>
    <div className="ImgSlider__division">
      <img className="ImgSlider__img" src=""  alt="Image 2"/>
    </div>
    <div className="ImgSlider__division">
      <img className="ImgSlider__img" src=""  alt="Image 3"/>
    </div>
    <div className="ImgSlider__division">
      <img className="ImgSlider__img" src=""  alt="Image 4"/>
    </div>
  </Slider>;
}

export default ImgSlider;

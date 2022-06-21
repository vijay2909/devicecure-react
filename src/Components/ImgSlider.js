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

  return <Slider className="ImgSlider" {...settings}>
     <div className="ImgSlider__division">
      <img className="ImgSlider__img" src="" alt="Image1" />
    </div>
    <div className="ImgSlider__division">
      <img className="ImgSlider__img" src=" " alt="Image2" />
    </div>
    <div className="ImgSlider__division">
      <img className="ImgSlider__img" src="" alt="Image3" />
    </div>
    <div className="ImgSlider__division">
      <img className="ImgSlider__img" src=" " alt="Image4" />
    </div>
  </Slider>;
}

export default ImgSlider;

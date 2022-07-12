import React, { useEffect, useState } from "react";
import "./ImgSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import axios from "axios";

function ImgSlider() {

  const [banner, setBanner] = useState([]);

  useEffect(()=>{
    axios.get("https://staging.devicecure.in/api/banners")
    .then((res)=>{
      setBanner(res.data.data);
      // console.log(res.data.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return <Slider className="ImgSlider" {...settings}>
    {
      banner.map((data, idx)=>
        <MainDiv className="ImgSlider__division">
          <Image className="ImgSlider__img" src={`${data.image.url_standard}`}  alt={`${data.image.image_url}`}/>
        </MainDiv>
      )
    }
  </Slider>;
}
const MainDiv = styled.div`
width : 100%;
height : 40vh;
`
const Image = styled.img`
widht : 100%;
height : 100%;
`

export default ImgSlider;

import React from 'react'
import ImgSlider from "./ImgSlider"
import Content from './Content'
import Footer from './Footer'


function Homepage() {
  return (
    <div className='homepage' style={{overflow:'hidden'}}>
        <ImgSlider />
        <Content />
        <Footer />
    </div>
  )
}

export default Homepage
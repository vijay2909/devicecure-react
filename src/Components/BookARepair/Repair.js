import React from 'react'
import './index.css'
import FirstPage from "./BookARepairFiles/FirstPage"
import SecondPage from "./BookARepairFiles/SecondPage"
import ThirdPage from "./BookARepairFiles/ThirdPage"
import {BrowserRouter as Router} from 'react-router-dom';

function Repair() {
  return (
  <div className='repair'>
    <FirstPage />
    {/* <SecondPage />
    <ThirdPage /> */}
  </div>
  )
}

export default Repair
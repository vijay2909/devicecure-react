import React from 'react'
import './index.css'
import FirstPage from "./BookARepairFiles/FirstPage"
import SecondPage from "./BookARepairFiles/SecondPage"
import ThirdPage from "./BookARepairFiles/ThirdPage"

function Repair() {
  return (
    <div className='repair'>
        <FirstPage />
        <SecondPage />
        <ThirdPage />
    </div>
  )
}

export default Repair
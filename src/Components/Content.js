import React from 'react'
import "./Content.css"

function Content() {
  return (
    <div className='content'>
    <div className='content__left'>
        <div className='content__heading'><span>How Devicecure works</span></div>
        <div className='content__points'>
            <span className='point__number'>1</span><span className='point__content'><strong>Book The Perfect Technician For Your Mobile</strong><small>We have the team of certified experienced technicians</small></span>
        </div>
        <div className='content__points'>
            <span className='point__number'>2</span><span className='point__content'><strong>Book The Perfect Technician For Your Mobile</strong><small>We have the team of certified experienced technicians</small></span>
        </div>
        <div className='content__points'>
            <span className='point__number'>3</span><span className='point__content'><strong>Book The Perfect Technician For Your Mobile</strong><small>We have the team of certified experienced technicians</small></span>
        </div>
        <div className='content__points'>
            <span className='point__number'>4</span><span className='point__content'><strong>Book The Perfect Technician For Your Mobile</strong><small>We have the team of certified experienced technicians</small></span>
        </div>
    </div>
    <div className='content__left'>
        <h1>Book A Repair</h1>
        <div className='box'>
            
        </div>
    </div>
    </div>
  )
}

export default Content
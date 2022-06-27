import React from 'react'
import "./Comment.css"

function Comment(props) {
  return (
    <div className='comment'>
      <h3>{props.heading}</h3>
      <span>{props.comment}</span>
      <div className='comment__id'>
      <strong>{props.name}</strong>
      <small>({props.company})</small>
      </div>
      
       
    </div>
  )
}

export default Comment
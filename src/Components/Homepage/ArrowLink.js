import React from 'react'
import './ArrowLink.css'
import './Header1.css'
import { Link } from 'react-router-dom'

function ArrowLink() {
  return (
    <div className='arrowLink'>
        <Link className="anchor" to='E-commerce'>></Link>
    </div>
  )
}

export default ArrowLink
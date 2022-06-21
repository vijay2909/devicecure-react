import React from "react";
import "./Header2.css";
import {Link} from "react-router-dom"

function Header2() {
  return (
    <div className="header2">
      <Link to="/"><span className="links">Home</span></Link>
      <Link to="/book-a-repair"><span className="links">Book A Repair</span></Link>
      <Link to="/screen-protection"><span className="links">Screen Propection</span></Link>
      <Link to="/buy-accessories"><span className="links">Buy Accessories</span></Link>
      <Link to="/about-us"><span className="links">About Us</span></Link>
      <Link to="/blog"><span className="links">Blog</span></Link>
    </div>
  );
}

export default Header2;

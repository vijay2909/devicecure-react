import React from "react";
import "./Header2.css";
import "./Header1.css";
import { Link } from "react-router-dom";

function Header2() {
  return (
    <div className="header2">
      <Link className="anchor" to="/">
        <span className="links">Home</span>
      </Link>

      <Link className="anchor" to="/book-a-repair">
        <span className="links">Book A Repair</span>
      </Link>

      <Link className="anchor" to="/screen-protection">
        <span className="links">Screen Propection</span>
      </Link>

      <Link className="anchor" to="/buy-accessories">
        <span className="links">Buy Accessories</span>
      </Link>

      <Link className="anchor" to="/about-us">
        <span className="links">About Us</span>
      </Link>

      <Link className="anchor" to="/blog">
        <span className="links">Blog</span>
      </Link>
    </div>
  );
}

export default Header2;

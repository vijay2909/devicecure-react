import React from "react";
import "./Header1.css";
import { Link } from "react-router-dom";

function Header1() {
  return (
    <div className="header1">
      <div className="header1__logo">
        <img src="./Images/devicecureLogo.jpg" alt="" />
      </div>

      <div className="header1__links">
        <span className="link__1">Location</span>
        <Link to="/login">
          <span className="link__2">Login</span>
        </Link>
      </div>
    </div>
  );
}

export default Header1;

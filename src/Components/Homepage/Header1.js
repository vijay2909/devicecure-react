import React, { useEffect, useState } from "react";
import "./Header1.css";
import { Link } from "react-router-dom";

function Header1() {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(localStorage.getItem("token"));
  }, []);

  function handleClick(){
    localStorage.removeItem('token')
  }
  return (
    <div className="header1">
      <div className="header1__logo">
        <img src="./Images/devicecureLogo.jpg" alt="" />
      </div>

      <div className="header1__links">
        <span className="link__1">Location</span>

        
          {!value ? (
            <Link className="anchor" to="/login">
            <span className="link__2">Login</span>
            </Link>
          ) : (
            <Link className="anchor" to="/Login">
            <span onClick={handleClick} className="link__2Logout">Logout</span>
            </Link>
          )}
        
      </div>
    </div>
  );
}

export default Header1;

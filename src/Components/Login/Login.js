import React from "react";
import "./Login.css";
import LoginBox from "./LoginFiles/LoginBox";
import Footer from "../Homepage/Footer";
import {Link} from "react-router-dom"

function Login() {
  return (
    <div className="login">
      <div className="login__logo">
        
        <Link to="/" >
        <img className="login__image" src="../../Images/devicecureLogo.jpg" alt="Logo" />
        </Link>
        <LoginBox />
      </div>
      <Footer />
    </div>
  );
}

export default Login;

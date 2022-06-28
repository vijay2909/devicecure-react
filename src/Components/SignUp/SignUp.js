import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Homepage/Footer";
import SignUpBox from "./SignUpFiles/SignUpBox";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="signUp">
      <div className="signUp__logo">
        <Link to="/">
          <img
            className="signUp__image"
            src="../../Images/devicecureLogo.jpg"
            alt="Logo"
          />
        </Link>
        <SignUpBox />
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;

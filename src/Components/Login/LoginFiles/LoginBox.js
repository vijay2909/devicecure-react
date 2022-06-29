import React, { useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import "./LoginBox.css";

function LoginBox() {
  const [number, setNumber] = useState("");
  // const [role, setRole] = useState('')

  function handleNumber(e) {
    setNumber(e.target.value);
  }
  /* function handleRole(e){
setRole(e.target.value)
  } */
  console.log({ number });

  function handelApi() {
    axios
      .post("https://staging.devicecure.in/api/auth/login", {
        phone_number: number,
        role: 'user',
      })
      .then((result) => {
        alert(result.data.message)
      })
      .catch((error) => {
        console.log(error);
        alert('Wrong Information')
      });
  }

  return (
    <div>
      <div className="loginBox">
        <h1>Sign-in</h1>
        <form>
          <span className="span">Enter Mobile Number</span>
          <input
            className="loginBox__input"
            type="text"
            value={number}
            onChange={handleNumber}
          />
          {/* <input
            className="loginBox__input"
            type="text"
            value={role}
            onChange={handleRole}
          /> */}
        </form>
        <button className="loginBox__google">
          <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" />
          <span>Continue With Google</span>
        </button>
        <button onClick={handelApi} className="loginBox__contiue">
          Continue
        </button>
        <p className="or">
          OR
        </p>
        <button className="loginBox__contiue">
          <Link to="/signup">
            <span className="button__text">Create Account</span>
          </Link>
        </button>

        <p>
          By continuing you agree to Devicecure's{" "}
          <a href="">Condition of Use</a> and <a href="">Privacy Notice</a>
        </p>
      </div>
    </div>
  );
}

export default LoginBox;

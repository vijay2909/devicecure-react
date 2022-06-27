import React, { useState } from "react";
import axios from "axios";
import "./LoginBox.css";

function LoginBox() {
  const [number, setNumber] = useState("");

  function handleNumber(e) {
    setNumber(e.target.value);
  }
  console.log({ number });

  function handelApi() {
    axios
      .post("https://staging.devicecure.in/api/auth/login", {
        phone_number : number,
      })
      .then((result) => {
        console.log(result);
        alert('LoggedIn Successfully')
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
        </form>
        <button className="loginBox__google">
          <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" />
          <span>Continue With Google</span>
        </button>
        <button onClick={handelApi} className="loginBox__contiue">
          Continue
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

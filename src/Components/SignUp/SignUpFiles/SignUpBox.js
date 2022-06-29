import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUpBox.css";

function SignUpBox() {
  const [name, setNAme] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handleName(e) {
    setNAme(e.target.value);
  }
  function handleNumber(e) {
    setNumber(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleAPI() {
    axios
      .post("https://staging.devicecure.in/api/auth/signup", {
        name: name,
        email: email,
        phone_number: number,
        device_token: "123",
        role: "user",
      })
      .then((response) => {
    
        localStorage.setItem("token", response.data.data.access_token);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <div className="signUpBox">
        <form>
          <span className="span">Fill Your Details</span>
          <input
            className="signUpBox__input"
            onChange={handleName}
            value={name}
            placeholder="Full Name"
            type="name"
          />
          <input
            className="signUpBox__input"
            onChange={handleNumber}
            value={number}
            placeholder="Mobile Number"
            type="text"
          />
          <input
            className="signUpBox__input"
            onChange={handleEmail}
            value={email}
            placeholder="Email"
            type="email"
          />
        </form>

        <button onClick={handleAPI} className="signUpBox__contiue">
          Continue
        </button>
      </div>
    </div>
  );
}

export default SignUpBox;

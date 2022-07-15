import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Repair from "./Components/BookARepair/Repair";
import UserOrders from "./Components/UserOrders/UserOrders";
import MobileRepairingOrders from "./Components/UserOrders/UserOrders Components/MobileRepairingOrders";
import ScreenProtectionOrders from "./Components/UserOrders/UserOrders Components/ScreenProtectionOrders";
import AccessoriesOrders from "./Components/UserOrders/UserOrders Components/AccessoriesOrders";

function App(props) {
  
const [brandName, setBrandName] = useState("");
const [modelName, setModelName] = useState("");
const [multiIssue, setMultiIssue] = useState([]);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Homepage 
          brandName={brandName} setBrandName={setBrandName}
          modelName={modelName} setModelName={setModelName}
          multiIssue={multiIssue} setMultiIssue={setMultiIssue}/>} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/Book-a-repair" element={<Repair 
          brandName={brandName} setBrandName={setBrandName}
          modelName={modelName} setModelName={setModelName}
          multiIssue={multiIssue} setMultiIssue={setMultiIssue}/>} />

          <Route path="/screen-protection" element={<UserOrders />} >
            <Route index element={<MobileRepairingOrders />}/>
            <Route path="screen-protction" element={<ScreenProtectionOrders/>}/>
            <Route path="accessories" element={<AccessoriesOrders/>}/>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

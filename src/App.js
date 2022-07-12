import React, {useState, useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Repair from "./Components/BookARepair/Repair";

function App() {
  const[totalDetailsData, setTotalDetailsData] = useState({});
  const[addId, setAddId] = useState();

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Book-a-repair" element={<Repair />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

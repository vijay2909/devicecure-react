import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Repair from "./Components/BookARepair/Repair";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/Book-a-repair' element={<Repair />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

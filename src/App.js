import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Repair from "./Components/BookARepair/Repair";
import SecondPage from "./Components/BookARepair/BookARepairFiles/SecondPage";
import ThirdPage from "./Components/BookARepair/BookARepairFiles/ThirdPage";
import AddNewAddressSection from "./Components/BookARepair/BookARepairFiles/AddNewAddressSection";
import UpdateAddressSection from "./Components/BookARepair/BookARepairFiles/UpdateAddressSection"

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/Book-a-repair' element={<Repair />} />
          <Route path="/second-page" element={<SecondPage />} />
          <Route path="/update-address-page" element={<UpdateAddressSection />} />
          <Route path="/third-page" element={<ThirdPage />} />
          <Route path="/add-new-address" element={<AddNewAddressSection />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

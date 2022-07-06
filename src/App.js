import React, {useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
// import Repair from "./Components/BookARepair/Repair";
import FirstPage from "./Components/BookARepair/BookARepairFiles/FirstPage";
import SecondPage from "./Components/BookARepair/BookARepairFiles/SecondPage";
import ThirdPage from "./Components/BookARepair/BookARepairFiles/ThirdPage";
import AddNewAddressSection from "./Components/BookARepair/BookARepairFiles/AddNewAddressSection";
import UpdateAddressSection from "./Components/BookARepair/BookARepairFiles/UpdateAddressSection"
import FourthPage from "./Components/BookARepair/BookARepairFiles/FourthPage";
import EditReviewSection from "./Components/BookARepair/BookARepairFiles/EditReviewSection";

function App() {
  const[totalDetailsData, setTotalDetailsData] = useState({});
  const[addId, setAddId] = useState("");
  
    // mobile_brand : "",
    // mobile_model : "",
    // mobile_color : "",
    // issues : "",
    // repair_date : "",
    // time_slot_id : "",
    // name : "",
    // phone_number : "",
    // alternate_number : "",
    // house_number : "",
    // street : "",
    // pin_code : "",
    // address_type : "",
    // landmark : "",
    // wallet_money : "",
    // address_id : "",
    // coupon_id : ""

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path='/Book-a-repair' element={<FirstPage 
          totalDetailsData={totalDetailsData} setTotalDetailsData={setTotalDetailsData} />} />

          <Route path="/second-page" element={<SecondPage 
          totalDetailsData={totalDetailsData} setTotalDetailsData={setTotalDetailsData}
          addId={addId} setAddId={setAddId} />} />

          <Route path="/add-new-address" element={<AddNewAddressSection />} />

          <Route path="/update-address-page" element={<UpdateAddressSection 
          addId={addId} setAddId={setAddId} />} />

          <Route path="/third-page" element={<ThirdPage 
          totalDetailsData={totalDetailsData} setTotalDetailsData={setTotalDetailsData} />} />

          <Route path="/edit-review-page" element={<EditReviewSection
          totalDetailsData={totalDetailsData} setTotalDetailsData={setTotalDetailsData} />} />

          <Route path="/fourth-page" element={<FourthPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

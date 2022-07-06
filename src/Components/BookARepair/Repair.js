// import React, {useState } from 'react';
// import './index.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import FirstPage from "./BookARepairFiles/FirstPage";
// import SecondPage from './BookARepairFiles/SecondPage';
// import ThirdPage from './BookARepairFiles/ThirdPage';
// import FourthPage from './BookARepairFiles/FourthPage';

// function Repair() {

//   const [firstPage, setFirstPage] = useState(false);
//   const [secondPage, setSecondPage] = useState(true);
//   const [thirdPage, setThirdPage] = useState(false);
//   const [fourthPage, setFourthPage] = useState(false);

//   const [addId, setAddId] = useState("");

//   const[totalDetailsData, setTotalDetailsData] = useState({
//     mobile_brand : "",
//     mobile_model : "",
//     mobile_color : "",
//     issues : "",
//     repair_date : "",
//     time_slot_id : "",
//     name : "",
//     phone_number : "",
//     alternate_number : "",
//     house_number : "",
//     street : "",
//     pin_code : "",
//     address_type : "",
//     landmark : "",
//     wallet_money : "",
//     address_id : "",
//     coupon_id : ""
//   });

//   return (
//   <div className='repair'>
//     {
//       firstPage
//       &&
//       <FirstPage 
//       totalDetailsData={totalDetailsData} 
//       setTotalDetailsData={setTotalDetailsData}
//       firstPage={firstPage}
//       setFirstPage={setFirstPage}
//       secondPage={secondPage}
//       setSecondPage={setSecondPage}
//       />
//     }

//     {
//       secondPage
//       &&
//       <SecondPage
//       totalDetailsData={totalDetailsData} 
//       setTotalDetailsData={setTotalDetailsData}
//       firstPage={firstPage}
//       setFirstPage={setFirstPage}
//       secondPage={secondPage}
//       setSecondPage={setSecondPage}
//       thirdPage={thirdPage}
//       setThirdPage={setThirdPage}
//       addId={addId}
//       setAddId={setAddId}
//       />
//     }

//     {
//       thirdPage
//       &&
//       <ThirdPage
//       totalDetailsData={totalDetailsData} 
//       setTotalDetailsData={setTotalDetailsData}
//       secondPage={secondPage}
//       setSecondPage={setSecondPage}
//       thirdPage={thirdPage}
//       setThirdPage={setThirdPage}
//       fourthPage={fourthPage}
//       setFourthPage={setFourthPage}
//       />
//     }

//     {
//       fourthPage
//       &&
//       <FourthPage
//       totalDetailsData={totalDetailsData} 
//       setTotalDetailsData={setTotalDetailsData}
//       thirdPage={thirdPage}
//       setThirdPage={setThirdPage}
//       fourthPage={fourthPage}
//       setFourthPage={setFourthPage}
//       />
//     }
//   </div>
//   )
// }

// export default Repair
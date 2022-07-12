// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import '../index.css';
// import styled from "styled-components";
// import axios from "axios"
// import Header1 from "../../Homepage/Header1";
// import Header2 from "../../Homepage/Header2";
// import Footer from "../../Homepage/Footer";

// export default function EditReviewSection(props){

//   const auth = 'Bearer ' + localStorage.getItem('token');

//   const [loading, setLoading] = useState(true); // state for loading gif

//   const [current, setCurrent] = useState(""); //state for current date

//   const reqBrand = axios.get("https://staging.devicecure.in/api/brands");
//   const reqColour = axios.get("https://staging.devicecure.in/api/colors");
//   const reqIssues = axios.get("https://staging.devicecure.in/api/issues");
//   const reqTime = axios.get("https://staging.devicecure.in/api/time-slots");
//   const reqAddress = axios.get(`https://staging.devicecure.in/api/Address/${props.totalDetailsData.address_id}`)

//     //state for different types of brands, models and issues etc..
//     const [brand, setBrand] = useState([]);
//     const [colour, setColour] = useState([]);
//     const [model, setModel] = useState([]);
//     const [issue, setIssue] = useState([]);
//     const [time, setTime] = useState([]);

//     //states for individual address data
//     const [name, setName] = useState("");
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [altNumber, setAltNumber] = useState("");
//     const [house, setHouse] = useState("");
//     const [street, setStreet] = useState("");
//     const [landmark, setLandmark] = useState("");
//     const [pincode, setPincode] = useState("");
//     const [addType, setAddType] = useState("");

//     //all the values
//     const [brandValue, setBrandValue] = useState("");
//     const [modelValue, setModelValue] = useState("");
//     const [colourValue, setColourValue] = useState("");
//     const [issueValue, setIssueValue] = useState("");
//     const [dateValue, setDateValue] = useState("");
//     const [timeValue, setTimeValue] = useState("");

//     const [nameValue, setNameValue] = useState("");
//     const [phoneNumberValue, setPhoneNumberValue] = useState("");
//     const [altNumberValue, setAltNumberValue] = useState("");
//     const [houseValue, setHouseValue] = useState("");
//     const [streetValue, setStreetValue] = useState("");
//     const [landmarkValue, setLandmarkValue] = useState("");
//     const [pincodeValue, setPincodeValue] = useState("");
//     const [addTypeValue, setAddTypeValue] = useState("");

//   useEffect(() => {
//     setCurrent(new window.Date().toISOString().slice(0, 10));
//     console.log(current);
//     axios
//       .all([reqBrand, reqColour, reqIssues, reqTime, reqAddress])
//       .then(
//         axios.spread((...res) => {

//         //fetching data for different types of brands, models and issues etc..
//           setBrand(res[0].data.data);
//           setColour(res[1].data.data);
//           setIssue(res[2].data.data);
//           setTime(res[3].data.data);

//         //individual data, works same as the update section
//           setName(res[4].data.data.name);
//           setPhoneNumber(res[4].data.data.phone_number);
//           setAltNumber(res[4].data.data.alternate_number);
//           setHouse(res[4].data.data.house_number);
//           setStreet(res[4].data.data.street);
//           setLandmark(res[4].data.data.landmark);
//           setPincode(res[4].data.data.pin_code);
//           setAddType(res[4].data.data.address_type);

//         //for loading gif
//           setLoading(false);
//         })
//       )
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);


//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setBrandValue(document.getElementsByName("brand").value);
//     setModelValue(document.getElementsByName("model").value);
//     setColourValue(document.getElementsByName("colour").value);
//     setIssueValue(document.getElementsByName("issue").value)

//     const yyyy_mm_dd = document.getElementsByName("date").value;
//     const year = yyyy_mm_dd.slice(0,4);
//     const month = yyyy_mm_dd.slice(5,7);
//     const day = yyyy_mm_dd.slice(8,10);
//     const dd_mm_yyyy = day+"-"+month+"-"+year;
//     setDateValue(dd_mm_yyyy);

//     setTimeValue(document.getElementsByName("time").value);
//     setNameValue(document.getElementsByName("name").value);
//     setPhoneNumberValue(document.getElementsByName("phoneNumber").value);
//     setAltNumberValue(document.getElementsByName("altNumber").value);
//     setHouseValue(document.getElementsByName("houseNumber").value);
//     setStreetValue(document.getElementsByName("street").value);
//     setLandmarkValue(document.getElementsByName("landmark").value);
//     setPincodeValue(document.getElementsByName("pincode").value);
//     setAddTypeValue(document.getElementsByName("addType").value);

//     props.setTotalDetailsData({

//         mobile_brand : brandValue,
//         mobile_model : modelValue,
//         mobile_color : colourValue,
//         issues : issueValue,
//         repair_date : dateValue,
//         time_slot_id : timeValue,

//         name : nameValue,
//         phone_number : phoneNumberValue,
//         alternate_number : altNumberValue,
//         house_number : houseValue,
//         street : streetValue,
//         pin_code : pincodeValue,
//         address_type : addTypeValue,
//         landmark : landmarkValue,

//         address_id : props.totalDetailsData.address_id,
//         wallet_money : "",
//         coupon_id : ""
//     });
    
//     axios.put(`https://staging.devicecure.in/api/Address/${props.totalDetailsData.address_id}`,
//         {
//             name : nameValue,
//             phone_number : phoneNumberValue,
//             alternate_number : altNumberValue,
//             house_number : houseValue,
//             street : streetValue,
//             pin_code : pincodeValue,
//             address_type : addTypeValue,
//             landmark : landmarkValue
//         },
//         {
//             headers: 
//             {
//                 Authorization : auth
//             }
//         })
//         .then((res)=>{
//             console.log(res);
//         })
//         .catch((err)=>{
//             console.log(err);
//         });
//         props.setPageNum(3);

//   };

//   const handleBrand = (e) => {
//     const selectedBrand = brand.filter((el) => el.brand_name == e.target.value);
//     setModel(selectedBrand[0].models);
//     props.totalDetailsData.mobile_brand = e.target.value;
//   }

//   const handleName = (e) => {
//     e.target.value = "";
//     // props.totalDetailsData.name = e.target.value;
//     // props.setTotalDetailsData(e.target.value);
//     props.setTotalDetailsData.name(e.target.value);
//     console.log("trying checking", props.totalDetailsData);
//   }

//   const handleCity = (e) => {
//   }
//   const handleAddType = (e) => {
//   }

//   const handleChage = (e) => {
//     props.setTotalDetailsData({
//       mobile_brand : brandName,
//       mobile_model : modelName,
//       mobile_color : colourName,
//       issues : multiIssue,
//       repair_date : date,
//       time_slot_id : timeSlot,
//       name : name,
//       phone_number : phoneNumber,
//       alternate_number : altNumber,
//       house_number : house,
//       street : street,
//       pin_code : pincode,
//       address_type : addType,
//       landmark : landmark,
//       address_id : addressId,
//       wallet_money : "",
//       coupon_id : ""
//     })
//   }

//   //Issues
//   const handleIssueCheck = () =>{
//     const finalCheckedArray = [];
//     const checkedValue = document.querySelectorAll('.issueItem:checked');
//     checkedValue.forEach((e)=>{
//       finalCheckedArray.push(e.value);
//     })
//     console.log(finalCheckedArray);
//     const inputValue = finalCheckedArray;
//     document.querySelector(".issueInputMain").value = inputValue;
//   }

//   const handleIssueClick = (e) =>{
//     const checkbox = e.target.firstElementChild;
//     if (checkbox.checked == true){
//       checkbox.checked = false;
//       handleIssueCheck();
//     }
//     else{
//       checkbox.checked = true;
//       handleIssueCheck();
//     }
//   }

//   const handleIssueDisplay = () =>{
//     const issueList = document.querySelector(".issueList");
//     if(issueList.classList.contains("issueDisplay")){
//       issueList.style.cssText = "display:block";
//     }
//     else{
//       issueList.style.cssText = "display:none";
//     }
//     issueList.classList.toggle("issueDisplay");
//   }

//     return(
//         <>
//         <Header1 />
//         <Header2 />
//         <div className=".container">
//             <ReviewForm onSubmit={handleSubmit}>
//                 <Brand required="required">
//                     <label>Brand</label>
//                     <select name="brand" value={props.totalDetailsData.mobile_brand} onChange={handleBrand} required >
//                     <option value="" selected disabled>
//                         Choose a brand
//                     </option>
//                     {brand.map((data, index) => (
//                         <option key={index} value={data.brand_name} >
//                         {data.brand_name}
//                         </option>
//                     ))}
//                     </select>
//                 </Brand>
//                 <Model>
//                     <label>Model</label>
//                     <select name="model" value={props.totalDetailsData.mobile_model} required >
//                     <option value="" selected disabled>
//                         Choose the model
//                     </option>
//                     {model.map((data, index) => (
//                         <option key={index} value={data.model_name}>
//                         {data.model_name}
//                         </option>
//                     ))}
//                     </select>
//                 </Model>
//                 <Colour>
//                     <label>Colour</label>
//                     <select name="colour" value={props.totalDetailsData.mobile_color} required >
//                     <option value="" selected disabled>
//                         Choose the colour
//                     </option>
//                     {colour.map((data, index) => (
//                         <option key={index} value={data.name} >
//                         {data.name}
//                         </option>
//                     ))}
//                     </select>
//                 </Colour>
//                 <Issue>
//                     <label className="issueLabelMain" >Issue with phone</label>
//                     <input className="issueInputMain" name="issue" value={props.totalDetailsData.issues} type="text" required placeholder="Choose an Issue" onClick={handleIssueDisplay}/>
//                     <IssueList className="issueList issueDisplay">
//                     {
//                         issue.map((data, index) => (
//                         <label for={data.title} value={data.title} className="issueLabel" onClick={handleIssueClick}>
//                             <input type="checkbox" value={data.title} className="issueItem" onChange={handleIssueCheck} onChecked />
//                             {data.title}<br/>
//                         </label>
//                         ))
//                     }
//                     </IssueList>
//                 </Issue>
//                 <Date>
//                     <label>Repairing Date</label>
//                     <input type="date" name="date" value={props.totalDetailsData.repair_date} min={current} required/>
//                 </Date>
//                 <Time>
//                     <label>Best Time Slot</label>
//                     <select name="time" value={props.totalDetailsData.time_slot_id} className="select" required>
//                     <option value="" selected disabled>
//                         Choose an Time Slot
//                     </option>
//                     {time.map((data, index) => (
//                         <option key={index} value={data.slot}>
//                         {data.slot}
//                         </option>
//                     ))}
//                     </select>
//                 </Time>
//                 <Name>
//                     <label>Name : </label>
//                     <input type="text" value={props.totalDetailsData.name} name="name" onChange={handleName} required />
//                 </Name>
//                 <PhoneNumber>
//                     <label>Phone Number : </label>
//                     <input type="text" value={props.totalDetailsData.phone_number} name="phoneNumber" required />
//                 </PhoneNumber>
//                 <AltNumber>
//                     <label>Alternative Phone Number : </label>
//                     <input type="text" value={props.totalDetailsData.alternate_number} name="altNumber" required />
//                 </AltNumber>
//                 <City>
//                     <label>City</label>
//                     <select onChange={handleCity} required>
//                         <option value="" selected disabled>
//                             Choose a City
//                         </option>
//                         <option value="Jaipur">Jaipur</option>
//                     </select>
//                 </City>
//                 <HouseNumber>
//                     <label>House/Plot Number : </label>
//                     <input type="text" value={props.totalDetailsData.house_number} name="houseNumber" required />
//                 </HouseNumber>
//                 <Street>
//                     <label>Street : </label>
//                     <input type="text" value={props.totalDetailsData.street} name="street" required />
//                 </Street>
//                 <Landmark>
//                     <label>Landmark : </label>
//                     <input type="text" value={props.totalDetailsData.landmark} name="landmark" required />
//                 </Landmark>
//                 <Pincode>
//                     <label>Pin Code : </label>
//                     <input type="text" value={props.totalDetailsData.pin_code} name="pincode" required />
//                 </Pincode>
//                 <AddressType>
//                     <label>Address Type : </label>
//                     <select onChange={handleAddType} required>
//                         <option value="" selected disabled>
//                             Choose an Address Type
//                         </option>
//                         <option value="HOME">HOME</option>
//                         <option value="OFFICE">OFFICE</option>
//                         <option value="OTHER">OTHER</option>
//                     </select>
//                 </AddressType>
//                 <Submit>
//                         <input type="submit" value="Continue" />
//                 </Submit>
//             </ReviewForm>
//         </div>
//         <Footer />
//         </>
//     )
// }
// const ReviewForm = styled.form`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-wrap: wrap;
// `
// const Brand = styled.div`
//   width: 40%;
//   margin: 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   label {
//     font-size: 1.3rem;
//     font-weight: bolder;
//     display: inline-block;
//     width: 80%;
//     text-align: left;
//     margin-bottom: 3px;
//     z-index : 1;
//   }
//   input {
//     width: 80%;
//     height: 40px;
//     border-radius: 10px;
//     padding: 0 10px;
//     border: 1.5px solid #561d9c;
//   }
//   select {
//     width: 80%;
//     height: 40px;
//     border-radius: 10px;
//     padding: 0 10px;
//     border: 1.5px solid #561d9c;
//   }
// `;
// const Model = styled(Brand)``;
// const Colour = styled(Brand)``;
// const Date = styled(Brand)``;
// const Time = styled(Brand)``;
// const Issue = styled.div`
//   width: 40%;
//   margin: 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   position : relative;
//   .issueLabelMain {
//     font-size: 1.3rem;
//     font-weight: bolder;
//     display: inline-block;
//     width: 80%;
//     text-align: left;
//     margin-bottom: 3px;
//   }
//   .issueInputMain {
//     width: 80%;
//     height: 40px;
//     border-radius: 10px;
//     padding: 0 10px;
//     border: 1.5px solid #561d9c;
//   }
//   .issueDisplay{
//     display: none;
//   }
// `;
// const IssueList = styled.div`
// width : 80%;
// border: 1px solid black;
// box-shadow: 0 0 5px grey;
// position : absolute;
// top : 100%;
// z-index : 10;
// background-color : white;
// input{
//   margin-right : 10px;
// }
// label{
//   display : inline-block;
//   width : 100%;
//   font-size : 14px;
//   padding : 0 10px;
// }
// label:hover{
//   background-color : #1e90ff;
//   color : white;
// }
// `
// const Name = styled.div`
// width: 40%;
// margin: 20px;
// display: flex;
// flex-direction: column;
// align-items: center;
// label {
//   font-size: 1.3rem;
//   font-weight: bolder;
//   display: inline-block;
//   width: 80%;
//   text-align: left;
//   margin-bottom: 3px;
// }
// input {
//   width: 80%;
//   height: 40px;
//   border-radius: 10px;
//   padding: 0 10px;
//   border: 1.5px solid #561d9c;
// }
// select {
//   width: 80%;
//   height: 40px;
//   border-radius: 10px;
//   padding: 0 10px;
//   border: 1.5px solid #561d9c;
// }
// `
// const PhoneNumber = styled(Name)``
// const AltNumber = styled(Name)``
// const HouseNumber = styled(Name)``
// const Street = styled(Name)``
// const Pincode = styled(Name)``
// const Landmark = styled(Name)``
// const AddressType = styled(Name)``
// const City = styled(Name)``

// const Submit = styled.div`
// width : 43%;
// margin-top: 20px;
// display : flex;
// justify-content : center;
// align-items : center;
// input{
//     width : 80%;
//     height : 40px;
//     border-radius : 10px;
//     background-color : #281A60;
//     color : white;
//     font-size : 1.3rem;
// `

// // const AddTypeRadios = styled.div`
// // width : 100%;
// // text-align : center;
// // `
// // const HomeRadio = styled.div`
// // width : 100%;
// // label{
// //     margin-left : 5px;
// // }
// // `
// // const OfficeRadio = styled(HomeRadio)``
// // const OtherRadio = styled(HomeRadio)``
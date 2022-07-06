import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../index.css";
import styled from "styled-components";
import axios from "axios";

export default function DetailsSection(props){

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
 
  const reqBrand = axios.get("https://staging.devicecure.in/api/brands");
  const reqColour = axios.get("https://staging.devicecure.in/api/colors");
  const reqIssues = axios.get("https://staging.devicecure.in/api/issues");
  const reqTime = axios.get("https://staging.devicecure.in/api/time-slots");

  const [brand, setBrand] = useState([]);
  const [colour, setColour] = useState([]);
  const [model, setModel] = useState([]);
  const [issue, setIssue] = useState([]);
  const [time, setTime] = useState([]);

  useEffect(() => {
    axios
      .all([reqBrand, reqColour, reqIssues, reqTime])
      .then(
        axios.spread((...res) => {
          setBrand(res[0].data.data);
          setColour(res[1].data.data);
          setIssue(res[2].data.data);
          setTime(res[3].data.data);
          setLoading(false)
        })
      )
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  const [brandName, setBrandName] = useState("");
  const [colourName, setColourName] = useState("");
  const [modelName, setModelName] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [date, setDate] = useState("");
  const [multiIssue, setMultiIssue] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    !localStorage.getItem('token') ? navigate('/login') : navigate("/second-page");

    props.setTotalDetailsData({
      mobile_brand : brandName,
      mobile_model : modelName,
      mobile_color : colourName,
      issues : multiIssue,
      repair_date : date,
      time_slot_id : timeSlot
    });

    navigate("/second-page");

  };

  function handleBrand(e) {
    const selectedBrand = brand.filter((el) => el.brand_name == e.target.value);
    setModel(selectedBrand[0].models);
    setBrandName(e.target.value);
  }
  const handleModel = (e) => {
    setModelName(e.target.value);
  }
  const handleColour = (e) => {
    setColourName(e.target.value);
  }
  const handleDate = (e) => {
    const yyyy_mm_dd = e.target.value;
    const year = yyyy_mm_dd.slice(0,4);
    const month = yyyy_mm_dd.slice(5,7);
    const day = yyyy_mm_dd.slice(8,10);
    const dd_mm_yyyy = day+"-"+month+"-"+year;
    setDate(dd_mm_yyyy);
  }
  const handleTime = (e) => {
    setTimeSlot(e.target.value);
  }
  const handleIssueCheck = () =>{
    const finalCheckedArray = [];
    const checkedValue = document.querySelectorAll('.issueItem:checked');
    checkedValue.forEach((e)=>{
      finalCheckedArray.push(e.value);
    })
    setMultiIssue(finalCheckedArray);
  }

  // const handleIssueClick = (current) =>{
  //   console.log(current.target.value);
  //   const label = document.querySelectorAll(".issueLabel");
  //   label.forEach((e)=>{
  //     const checkbox = e.firstElementChild;
  //     // console.log(e.for);
  //     // if(checkbox.checked == true){
  //     //   checkbox.checked = false;
  //     // }
  //     // else{
  //     //   checkbox.checked = true;
  //     // }
  //   })
  // }

  const handleIssueClick = (e) =>{
  }

  const handleIssueDisplay = () =>{
    const issueList = document.querySelector(".issueList");
    if(issueList.classList.contains("issueDisplay")){
      issueList.style.cssText = "display:block";
    }
    else{
      issueList.style.cssText = "display:none";
    }
    issueList.classList.toggle("issueDisplay");
  }

  return(
    <>
    {loading ? <h1>PAGE LOADING...</h1> : 
    <Details className="details" onSubmit={handleSubmit}>
      <Brand required="required">
        <label>Brand</label>
        <select onChange={handleBrand} name="brand" required >
          <option value="" selected disabled>
            Choose a brand
          </option>
          {brand.map((data, index) => (
            <option key={index} value={data.brand_name} >
              {data.brand_name}
            </option>
          ))}
        </select>
      </Brand>
      <Model>
        <label>Model</label>
        <select name="model" onChange={handleModel} required >
          <option value="" selected disabled>
            Choose the model
          </option>
          {model.map((data, index) => (
            <option key={index} value={data.model_name}>
              {data.model_name}
            </option>
          ))}
        </select>
      </Model>
      <Colour>
        <label>Colour</label>
        <select name="colour" onChange={handleColour} required >
          <option value="" selected disabled>
            Choose the colour
          </option>
          {colour.map((data, index) => (
            <option key={index} value={data.name} >
              {data.name}
            </option>
          ))}
        </select>
      </Colour>
      <Issue>
        <label className="issueLabelMain" >Issue with phone</label>
        <input className="issueInputMain" type="text" placeholder="Choose an Issue" onClick={handleIssueDisplay}/>
        <IssueList className="issueList issueDisplay">
          {
            issue.map((data, index) => (
              <label for={data.title} value={data.title} id={index} className="issueLabel" onClick={handleIssueClick}>
                <input type="checkbox" id={index} value={data.title} className="issueItem" onChange={handleIssueCheck} />
                {data.title}<br/>
              </label>
            ))
          }
        </IssueList>
      </Issue>
      <Date>
        <label>Repairing Date</label>
        <input type="date" onChange={handleDate} required/>
      </Date>
      <Time>
        <label>Best Time Slot</label>
        <select name="time" className="select" onChange={handleTime} required>
          <option value="" selected disabled>
            Choose an Time Slot
          </option>
          {time.map((data, index) => (
            <option key={index} value={data.slot}>
              {data.slot}
            </option>
          ))}
        </select>
      </Time>
      <Text>
        <p>Fill Details And Get Your Mobile Repaired At Your Doorstep</p>
      </Text>
      <Submit>
        <input type="submit" value="Continue" />
      </Submit>
    </Details>
}
    </>
    );
}
const Details = styled.form`
  width: 100%;
  // height : 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
const Brand = styled.div`
  width: 40%;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    font-size: 1.3rem;
    font-weight: bolder;
    display: inline-block;
    width: 80%;
    text-align: left;
    margin-bottom: 3px;
    z-index : 1;
  }
  input {
    width: 80%;
    height: 40px;
    border-radius: 10px;
    padding: 0 10px;
    border: 1.5px solid #561d9c;
  }
  select {
    width: 80%;
    height: 40px;
    border-radius: 10px;
    padding: 0 10px;
    border: 1.5px solid #561d9c;
  }
`;
const Model = styled(Brand)``;
const Colour = styled(Brand)``;
const Date = styled(Brand)``;
const Time = styled(Brand)``;
const Issue = styled.div`
  width: 40%;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position : relative;
  .issueLabelMain {
    font-size: 1.3rem;
    font-weight: bolder;
    display: inline-block;
    width: 80%;
    text-align: left;
    margin-bottom: 3px;
  }
  .issueInputMain {
    width: 80%;
    height: 40px;
    border-radius: 10px;
    padding: 0 10px;
    border: 1.5px solid #561d9c;
  }
  .issueDisplay{
    display: none;
  }
`;
const IssueList = styled.div`
width : 80%;
border: 1px solid black;
box-shadow: 0 0 5px grey;
position : absolute;
top : 100%;
z-index : 10;
background-color : white;
input{
  margin-right : 10px;
}
label{
  display : inline-block;
  width : 100%;
  font-size : 14px;
  padding : 0 10px;
}
label:hover{
  background-color : #1e90ff;
  color : white;
}
`
const Text = styled.div`
  width: 40%;
  text-align: center;
  margin: 20px;
  p {
    font-size: 1.3rem;
    color: grey;
  }
  // #281A60 dark purple
  // #561D9C light purple
`;
const Submit = styled.div`
  width: 40%;
  text-align: center;
  margin: 20px;
  input {
    width: 80%;
    height: 40px;
    border-radius: 10px;
    background-color: #281a60;
    color: white;
    font-size: 1.3rem;
  }
`;
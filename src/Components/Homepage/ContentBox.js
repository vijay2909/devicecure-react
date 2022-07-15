import React, { useState, useEffect } from "react";
import styled from "styled-components";
import './ContentBox.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ContentBox(props) {

const reqBrand = axios.get("https://staging.devicecure.in/api/brands");
const reqIssues = axios.get("https://staging.devicecure.in/api/issues");

const [brand, setBrand] = useState([]);
const [model, setModel] = useState([]);
const [issue, setIssue] = useState([]);

const [loading, setLoading] = useState(true);

const navigate = useNavigate();

useEffect(() => {
    sessionStorage.removeItem("TotalDetailsData");
    sessionStorage.removeItem("AddressDetails");
    sessionStorage.removeItem("BookingId");

    axios
      .all([reqBrand, reqIssues])
      .then(
        axios.spread((...res) => {
          setBrand(res[0].data.data);
          setIssue(res[1].data.data);
          setLoading(false);
        })
      )
      .catch((err) => {
        console.log("this is error", err);
      });
  }, []);

const handleSubmit = (e) =>{
  e.preventDefault();
  navigate("/Book-a-repair");
}

const handleBrand = (e) => {
    const selectedBrand = brand.filter((el) => el.brand_name == e.target.value);
    setModel(selectedBrand[0].models);
    props.setBrandName(e.target.value);
  }

const handleModel = (e) => {
  props.setModelName(e.target.value);
}

const handleIssueCheck = (e) =>{
  // e.stopPropagation();
  const finalCheckedArray = [];
  const checkedValue = document.querySelectorAll('.issueItem:checked');
  checkedValue.forEach((e)=>{
    finalCheckedArray.push(e.value);
  })
  props.setMultiIssue(finalCheckedArray);
  const inputValue = finalCheckedArray;
  document.querySelector(".issueInputMain").value = inputValue;
}

const handleIssueClick = (e) =>{
  e.stopPropagation();
  const checkbox = e.target.firstElementChild;
  if (checkbox.checked == true){
    checkbox.checked = false;
    handleIssueCheck();
  }
  else{
    checkbox.checked = true;
    handleIssueCheck();
  }
}

const hideDiv = (e) => {
  e.stopPropagation();
  const issueList = document.querySelector(".issueList");
  if(issueList.classList.contains("issueDisplay")){
  }
  else{
    issueList.style.cssText = "display:none";
    issueList.classList.toggle("issueDisplay");
  }
}

const handleIssueDisplay = (e) =>{
  e.stopPropagation();
  const issueList = document.querySelector(".issueList");
  if(issueList.classList.contains("issueDisplay")){
    issueList.style.cssText = "display:block";
  }
  else{
    issueList.style.cssText = "display:none";
  }
  issueList.classList.toggle("issueDisplay");
}

  return (
    <div>
      <div className="content__align"> 
        <div className="box" onClick={hideDiv}>
          <Form onSubmit={handleSubmit}>

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
              <select onChange={handleModel} name="model" >
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
            <Issue>
              <label className="issueLabelMain" >Issue with phone</label>
              <input className="issueInputMain" type="text" required placeholder="Choose an Issue" onClick={handleIssueDisplay}/>
              <IssueList className="issueList issueDisplay">
                {
                  issue.map((data, index) => (
                    <label for={data.title} value={data.title} className="issueLabel" onClick={handleIssueClick}>
                      <input type="checkbox" value={data.title} className="issueItem" onChange={handleIssueCheck} onChecked />
                      {data.title}<br/>
                    </label>
                  ))
                }
              </IssueList>
            </Issue>
            <Submit>
              <input type="submit" value="Book A Repair" />
            </Submit>

          </Form>
        </div>
      </div>
    </div>
  );
}
const Form = styled.form``
const Brand = styled.div`
  width: 80%;
  margin: 10px auto;
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
const Issue = styled.div`
  width: 80%;
  margin: 10px auto;
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
const Submit = styled.div`
  width: 80%;
  margin : 10px auto;
  text-align: center;
  input {
    width: 80%;
    height: 40px;
    border-radius: 10px;
    background-color: #281a60;
    color: white;
    font-size: 1.3rem;
  }
`

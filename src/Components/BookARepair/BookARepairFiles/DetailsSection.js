import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../index.css";
import styled from "styled-components";
import axios from "axios";

export default function DetailsSection() {
  const reqBrand = axios.get("https://staging.devicecure.in/api/brands");
  const reqColour = axios.get("https://staging.devicecure.in/api/colors");
  const reqIssues = axios.get("https://staging.devicecure.in/api/issues");
  const reqTime = axios.get("https://staging.devicecure.in/api/time-slots");

  const [brand, setBrand] = useState([]);
  const [colour, setColour] = useState([]);
  const [model, setModel] = useState([]);
  const [issue, setIssue] = useState([]);
  const [time, setTime] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    !localStorage.getItem('token')?
      navigate('/login'):
    navigate("/second-page");
  };

  function handleBrandClick(e) {
    alert(e.target.value);
    const selectedBrand = brand.filter((el) => el.brand_name == e.target.value);
    console.log("logg"+ JSON.stringify(selectedBrand))
    setModel(selectedBrand[0].models)

    // /---------------------------
    // const auth = 'Bearer ' + localStorage.getItem('token')
    //  localStorage.getItem('token')
    // axios.get('https://staging.devicecure.in/api/Address',{
    //     headers:{
    //         Authorization:auth
    //     }
    // }).then((res)=>{
    //     console.log(res)
    // }).catch((err)=>{
    //     console.log(err)
    // })
  }

  useEffect(() => {
    axios
      .all([reqBrand, reqColour, reqIssues, reqTime])
      .then(
        axios.spread((...res) => {
          setBrand(res[0].data.data);
          setColour(res[1].data.data);
          setIssue(res[2].data.data);
          setTime(res[3].data.data);
        })
      )
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
   
    <Details className="details" onSubmit={handleSubmit}>
        
      <Brand required="required">
        <label>Brand</label>
        <select onChange={handleBrandClick} name="brand">
          <option value="null" selected disabled>
            Choose a brand
          </option>
          {brand.map((data, index) => (
            <option key={index} value={data.brand_name}>
              {data.brand_name}
            </option>
          ))}
        </select>
      </Brand>
      <Model>
        <label>Model</label>
        <select name="model">
          <option value="null" selected disabled>
            Choose the model
          </option>
          {model.map((e) => (
            <option key={e.id} value={e.model_name}>
              {e.model_name}
            </option>
          ))}
        </select>
      </Model>
      <Colour>
        <label>Colour</label>
        <select name="colour">
          <option value="" selected disabled>
            Choose the colour
          </option>
          {colour.map((data, index) => (
            <option key={index} value={data.name}>
              {data.name}
            </option>
          ))}
        </select>
      </Colour>
      <Issue>
        <label>Issue with phone</label>
        <select name="issue" className="select">
          <option value="" selected disabled>
            Choose an Issue
          </option>
          {issue.map((data, index) => (
            <option key={index} value={data.title}>
              {data.title}
            </option>
          ))}
        </select>
      </Issue>
      <Date>
        <label>Repairing Date</label>
        <input type="date" />
      </Date>
      <Time>
        <label>Best Time Slot</label>
        <select name="time" className="select">
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
const Issue = styled(Brand)``;
const Date = styled(Brand)``;
const Time = styled(Brand)``;
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

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../index.css";
import styled from "styled-components";
import axios from "axios";
import Multiselect from "multiselect-react-dropdown";
import Select from "react-select";

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

  const [brandName, setBrandName] = useState("");
  const [colourName, setColourName] = useState("");
  const [modelName, setModelName] = useState("");
  const [issueName, setIssueName] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [date, setDate] = useState("");
  const [multiIssue, setMultiIssue] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    !localStorage.getItem('token') ? navigate('/login') : navigate("/second-page");
    const auth = 'Bearer ' + localStorage.getItem('token');
    axios.post("https://staging.devicecure.in/api/repairing-orders",
    {
      mobile_brand : brandName,
      mobile_model : modelName,
      mobile_color : colourName,
      issues : issueName,
      repair_date : date,
      time_slot_id : timeSlot
    },
    {
      headers: 
            {
                Authorization : auth
            }
    })
    .then((res) => {
      console.log("this is reponse", res)
    })
    .catch((err) => {
      console.log("this is error", err)
    })
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
    console.log(e.target.value);
  }
  const handleIssue = (e) => {
    setIssueName(e.target.value);
  }
  const handleDate = (e) => {
    setDate(e.target.value);
  }
  const handleTime = (e) => {
    setTimeSlot(e.target.value);
  }
  const handleMultiIssue = (e) => {
    console.log(e.target.value);
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

  // const issues = ["hell0","byebye"];

  // const issues = issue.map((data) => {
  //   value : data.title,
  //   label : data.title
  // })

  // const issues = [
  //   {
  //     value: "lolvalue1",
  //     label: "lollabel1"
  //   },
  //   {
  //     value: "lolvalue2",
  //     label: "lollabel2"
  //   }
  // ]

  return (
   
    <Details className="details" onSubmit={handleSubmit}>
        
      <Brand required="required">
        <label>Brand</label>
        <select onChange={handleBrand} name="brand">
          <option value="null" selected disabled>
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
        <select name="model" onChange={handleModel}>
          <option value="null" selected disabled>
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
        <select name="colour" onChange={handleColour}>
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
        <label>Issue with phone</label>
        <select name="issue" className="select" onChange={handleIssue} isMulti>
          <option value="" selected disabled>
            Choose an Issue
          </option>
          {issue.map((data, index) => (
            <option key={index} value={data.title} >
              {data.title}
            </option>
          ))}
        </select>
      </Issue>
      <Date>
        <label>Repairing Date</label>
        <input type="date" onChange={handleDate}/>
      </Date>
      <Time>
        <label>Best Time Slot</label>
        <select name="time" className="select" onChange={handleTime}>
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
      {/* <Select isMulti options={lol}></Select>
      <Multiselect
        isObject={false}
        onKeyPressFn={function noRefCheck(){}}
        onRemove={(e)=>{console.log(e)}}
        onSearch={function noRefCheck(){}}
        onSelect={function noRefCheck(){}}
        options={[
          'Option 1',
          'Option 2',
          'Option 3',
          'Option 4',
          'Option 5'
        ]}
      /> */}
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

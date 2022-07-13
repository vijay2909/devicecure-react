import React, { useEffect } from "react";
import styled from "styled-components";
import './ContentBox.css';
import axios from "./axios";

export default function ContentBox() {

  const reqBrand = axios.get("https://staging.devicecure.in/api/brands");
const reqIssues = axios.get("https://staging.devicecure.in/api/issues");
const [brand, setBrand] = useState([]);
  const [colour, setColour] = useState([]);
  const [model, setModel] = useState([]);
  const [issue, setIssue] = useState([]);
  const [time, setTime] = useState([]);
useEffect(() => {
    sessionStorage.removeItem("TotalDetailsData");
    sessionStorage.removeItem("AddressDetails");
    sessionStorage.removeItem("BookingId");
    setCurrent(new window.Date().toISOString().slice(0, 10));
    axios
      .all([reqBrand, reqColour, reqIssues, reqTime])
      .then(
        axios.spread((...res) => {
          setBrand(res[0].data.data);
          setColour(res[1].data.data);
          setIssue(res[2].data.data);
          setTime(res[3].data.data);
          setLoading(false);
        })
      )
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  useEffect(()=>{
    axios.get("")
  },[])

  return (
    <div>
      <div className="content__align"> 
        <div className="box">
          <Form>

            <Brand required="required">
              <label>Brand</label>
              <select name="brand" required >
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
              <select name="model" required >
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

          </Form>
        </div>
      </div>
    </div>
  );
}
const Form = styled.form``
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

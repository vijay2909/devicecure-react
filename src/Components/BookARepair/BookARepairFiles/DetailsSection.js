import React from "react";
import ReactDOM from "react-dom";
import '../index.css';
import styled from "styled-components";

export default function DetailsSection(props){
    return(
        <>
        <Details className="details">
            <Brand>
                <label>Brand</label>
                <select name="brand">
                    <option value="" selected disabled>Choose a brand</option>
                    <option value="iPhone">iPhone</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Oppo">Oppo</option>
                    <option value="OnePlus">OnePlus</option>
                </select>
            </Brand>
            <Model>
                <label>Model</label>
                <select name="brand">
                    <option value="" selected disabled>Choose a brand</option>
                    <option value="iPhone">iPhone</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Oppo">Oppo</option>
                    <option value="OnePlus">OnePlus</option>
                </select>
            </Model>
            <Colour>
                <label>Colour</label>
                <input type="text" />
            </Colour>
            <Issue>
                <label>Issue with phone</label>
                <select name="brand" className="select">
                    <option value="" selected disabled>Choose an Issue</option>
                    <option value="Brokken Display">Broken display</option>
                    <option value="Touuch not working">Touch not working</option>
                    <option value="Charging issue">Charging issue</option>
                    <option value="Other">Other</option>
                </select>
            </Issue>
            <Date>
                <label>Repairing Date</label>
                <input type="date" />
            </Date>
            <Time>
                <label>Best Time Slot</label>
                <input type="time" />
            </Time>
            <Text>
                <p>Fill Details And Get Your Mobile Repaired At Your Doorstep</p>
            </Text>
            <Submit>
                <input type="submit" value="Continue" />
            </Submit>
        </Details>
        </>
    )
}
const Details = styled.form`
width : 100%;
// height : 100vh;
display : flex;
justify-content : space-between;
align-items : center;
flex-wrap : wrap;
`
const Brand = styled.div`
width : 40%;
margin : 20px;
display : flex;
flex-direction : column;
align-items : center;
label{
    font-size : 1.3rem;
    font-weight : bolder;
    display : inline-block;
    width : 80%;
    text-align : left;
    margin-bottom : 3px;
}
input{
    width : 80%;
    height : 40px;
    border-radius : 10px;
    padding : 0 10px;
    border : 1.5px solid #561D9C;
}
select{
    width : 87%;
    height : 40px;
    border-radius : 10px;
    padding : 0 10px;  
    border : 1.5px solid #561D9C;
}
`
const Model = styled(Brand)`
`
const Colour = styled(Brand)`
`
const Issue = styled(Brand)`
`
const Date = styled(Brand)`
`
const Time = styled(Brand)`
`
const Text = styled.div`
width : 40%;
text-align : center;
margin : 20px;
p{
    font-size : 1.3rem;
    color : grey;
}
// #281A60 dark purple
// #561D9C light purple
`
const Submit = styled.div`
width : 40%;
text-align : center;
margin : 20px;
input{
    width : 85%;
    height : 40px;
    border-radius : 10px;
    background-color : #281A60;
    color : white;
    font-size : 1.3rem;
}
`
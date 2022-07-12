import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import '../index.css';
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function FinalThankYouSection(props){

    const[finalData, setFinalData] = useState("");

    useEffect(()=>{
        const auth = 'Bearer ' + localStorage.getItem('token');
        axios.get("https://staging.devicecure.in/api/repairing-orders",
        {
            headers: 
            {
                Authorization : auth
            }
        })
        .then((res) => {
            console.log(res.data.data);
            setFinalData(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        });
        console.log("hogaya post");
    },[])

    return(
        <>
        <Edit>
            <ThankyouAndID>
                <h2>Thank You For Booking Us</h2>
                <h3>Your Request Id - REQ10005</h3>
            </ThankyouAndID>
            <Details>
                <IssueFixDetails>
                    <p>Mobile : {finalData.mobile_brand} {finalData.mobile_model}</p>
                    <p>Colour : {finalData.mobile_color}</p>
                    <p>Repairing Date : {finalData.repair_date}</p>
                    <p>Time Slot : {finalData.time_slot}</p>
                </IssueFixDetails>
                <IssueWithPhone>
                    <h3>Issue With Phone :</h3>
                    {
                        finalData.issues.map((data,index)=>
                            <p key={index}>{data}</p>
                        )
                    } 
                </IssueWithPhone>
                <Written>
                    <p>Sit Back & Relax, You Booked A Certified Technician To Repair Your Mobiile</p>
                </Written>
                <Submission>
                    <a href="#" >My orders</a>
                </Submission>
            </Details>
        </Edit>
        </> 
    )
}
const ThankyouAndID = styled.div`
width : 100%;
text-align : center;
padding : 20px;
h2{
    margin-bottom : 10px;
}
`
const Edit = styled.div`
display : inline-block;
width : 100%;
height : auto;
`
const Details = styled.div`
width : 100%;
padding : 20px 20px;
display : flex;
justify-content : space-between;
flex-wrap : wrap;
`
const IssueFixDetails = styled.div`
width : 55%;
`
const IssueWithPhone = styled.div`
width : 45%;
height : auto;
`
const Written = styled.div`
width : 45%;
text-align : center;
margin-top: 20px;
p{
    font-size : 1.3rem;
    color : grey;
}
`
const Submission = styled.div`
height : auto;
width : 45%;
display : flex;
justify-content : center;
align-items : center;
a{
    width : 75%;
    height : 40px;
    display : flex;
    align-items : center;
    justify-content : center;
    text-decoration : none;
    border-radius : 10px;
    background-color : #281A60;
    color : white;
    font-size : 1.3rem;
}
`
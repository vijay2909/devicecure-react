import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../index.css';
import styled from "styled-components";
import * as Io5 from "react-icons/io5";
import axios from "axios";

export default function ReviewSection(props){

    const [mobileData, setMobileData] = useState({});
    const [addData, setAddData] = useState({});
    const [issueArray, setIssueArray] = useState([]);

    useEffect(()=>{
        setMobileData(JSON.parse(sessionStorage.getItem("TotalDetailsData")));
        setAddData(JSON.parse(sessionStorage.getItem("AddressDetails")));
    },[])

    function handleSubmit(e) {
        e.preventDefault();
        const auth = 'Bearer ' + localStorage.getItem('token');
        axios.post("https://staging.devicecure.in/api/repairing-orders",
        {
            mobile_brand : mobileData.mobile_brand,
            mobile_model : mobileData.mobile_model,
            mobile_color : mobileData.mobile_color,
            issues : mobileData.issues,
            repair_date : mobileData.repair_date,
            time_slot_id : mobileData.time_slot_id,
            address_id : addData.address_id,
            wallet_money : addData.wallet_money,
            coupon_id : addData.coupon_id
        },
        {
            headers: 
            {
                Authorization : auth
            }
        })
        .then((res) => {
            console.log("this is res", res);
            sessionStorage.removeItem("TotalDetailsData");
            sessionStorage.removeItem("AddressDetails");
            var booking_id = res.data.data[0].booking_id;
            sessionStorage.setItem("BookingId", booking_id);
            props.setPageNum(4);
        })
        .catch((err) => {
            console.log("this is err", err);
        });
    }

    return(
        <>
        <Edit>
            <ReviewDetails>
                <h3>Made a mistake while providing Details?<br/>Click on the above pages to change them!</h3>
            </ReviewDetails>
            <Details>
                <IssueFixDetails>
                    <p>Mobile : {mobileData.mobile_brand} {mobileData.mobile_model}</p>
                    <p>Colour : {mobileData.mobile_color}</p>
                    <p>Repairing Date : {mobileData.repair_date}</p>
                    <p>Time Slot : {mobileData.time_slot}</p>
                </IssueFixDetails>
                <IssueWithPhone>
                    <h3>Issue With Phone :</h3>
                    <p>
                        {mobileData.issues?.map((data, idx)=><span>{data}<br/></span>)}
                    </p>
                </IssueWithPhone>
                <PersonalDetails>
                    <h3>Personal Details :</h3>
                    <p>Name : {addData.name}</p>
                    <p>Address : {addData.house_number} - {addData.street}, {addData.landmark}</p>
                    <p>City : {addData.city}</p>
                    <p>State : Rajasthan</p>
                    <p>Postal Code : {addData.pin_code}</p>
                    <p>Contact No. : {addData.phone_number}</p>
                </PersonalDetails>
                <Submission>
                    <p>Have a Promocode ?</p>
                    <a href="" onClick={handleSubmit}>Continue</a>
                </Submission>
            </Details>
        </Edit>
        </> 
    )
}
const Edit = styled.div`
display : inline-block;
width : 100%;
height : auto;
`
const ReviewDetails = styled.div`
text-align : center;
color : #281A60;
margin : 20px 40px;
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
const PersonalDetails = styled(IssueWithPhone)``
const Submission = styled.div`
height : auto;
width : 45%;
display : flex;
justify-content : flex-end;
align-items : center;
flex-direction : column;
p{
    margin-bottom : 5px;
}
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
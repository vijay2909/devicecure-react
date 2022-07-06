import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../index.css';
import styled from "styled-components";
import * as Io5 from "react-icons/io5";
import axios from "axios";

export default function ReviewSection(props){

    useEffect(()=>{
        console.log(props.totalDetailsData);
    },[])

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        const auth = 'Bearer ' + localStorage.getItem('token');
        axios.post("api/repairing-orders",
        {
            mobile_brand : props.totalDetailsData.mobile_brand,
            mobile_model : props.totalDetailsData.mobile_model,
            mobile_color : props.totalDetailsData.mobile_color,
            issues : props.totalDetailsData.issues,
            repair_date : props.totalDetailsData.repair_date,
            time_slot_id : props.totalDetailsData.time_slot_id,
            address_id : props.totalDetailsData.address_id,
            wallet_money : props.totalDetailsData.wallet_money,
            coupon_id : props.totalDetailsData.coupon_id
        },
        {
            headers: 
            {
                Authorization : auth
            }
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });

        navigate("/fourth-page");
    }

    const handleEditReview = (e) => {
        e.preventDefault();
        navigate("/edit-review-page")
    }

    return(
        <>
        <Edit>
            <ReviewDetails>
                <Io5.IoPencil onClick={handleEditReview} className="editPencil"/>
                <h3 onClick={handleEditReview} >Review Your Order Details</h3>
            </ReviewDetails>
            <Details>
                <IssueFixDetails>
                    <p>Mobile : {props.totalDetailsData.mobile_brand} {props.totalDetailsData.mobile_model}</p>
                    <p>Colour : {props.totalDetailsData.mobile_color}</p>
                    <p>Repairing Date : {props.totalDetailsData.repair_date}</p>
                    <p>Time Slot : {props.totalDetailsData.time_slot_id}</p>
                </IssueFixDetails>
                <IssueWithPhone>
                    <h3>Issue With Phone :</h3>
                    {
                        props.totalDetailsData.issues.map((data,index)=>
                            <p key={index} >{data}</p>
                        )
                    }
                </IssueWithPhone>
                <PersonalDetails>
                    <h3>Personal Details :</h3>
                    <p>Name : {props.totalDetailsData.name}</p>
                    <p>Address : {props.totalDetailsData.house_number} - {props.totalDetailsData.street}, {props.totalDetailsData.landmark}</p>
                    <p>City : Jaipur</p>
                    <p>State : Rajasthan</p>
                    <p>Postal Code : {props.totalDetailsData.pin_code}</p>
                    <p>Contact No. : {props.totalDetailsData.phone_number}</p>
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
display : flex;
align-items : center;
justify-content : center;
color : #281A60;
h3{
    margin-left : 10px;
    cursor : pointer;
}
.editPencil{
    font-size : 2rem;
    cursor : pointer;
}
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
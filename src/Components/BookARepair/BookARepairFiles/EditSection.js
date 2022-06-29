import React from "react";
import ReactDOM from "react-dom";
import '../index.css'
import styled from "styled-components";
import * as Io5 from "react-icons/io5";

export default function EditSection(){
    return(
        <>
        <Edit>
            <ReviewDetails>
                <Io5.IoPencil className="editPencil"/>
                <h3>Review Your Order Details</h3>
            </ReviewDetails>
            <Details>
                <IssueFixDetails>
                    <p>Mobile : Apple iPhone 5C</p>
                    <p>Colour : White</p>
                    <p>Repairing Date : 21/Jun/2022</p>
                    <p>Time Slot : 04:00 PM - 07:00 PM</p>
                </IssueFixDetails>
                <IssueWithPhone>
                    <h3>Issue With Phone :</h3>
                    <p>Screen Problem</p>
                    <p>Receiver Problem</p>
                    <p>Camera Problem</p>
                    <p>Sensor Problem</p> 
                </IssueWithPhone>
                <PersonalDetails>
                    <h3>Personal Details :</h3>
                    <p>Name : Hrithik Kumar</p>
                    <p>Address : 21,22 Ganpati Vihar, Rakdi, Sodala</p>
                    <p>City : Jaipur</p>
                    <p>State : Rajasthan</p>
                    <p>Postal Code : 302006</p>
                    <p>Contact No. : 9782322536</p>
                </PersonalDetails>
                <Submission>
                    <p>Have a Promocode ?</p>
                    <a href="#">Continue</a>
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
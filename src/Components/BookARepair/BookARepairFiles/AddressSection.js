import React from "react";
import ReactDOM from "react-dom";
import '../index.css'
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "axios"
import * as Io5 from "react-icons/io5";
import * as Ai from "react-icons/ai";

export default function AddressSection(props){

    const navigate = useNavigate();
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate("/third-page");
    }

    return(
        <>
        <Address>
            <NewAddress>
                <Io5.IoAddCircle className="addCircle"/>
                <h3>Add New Address</h3>
            </NewAddress>
            <StoredAdress onSubmit={handleSubmit}>
                <AddressSampleOne>
                    <input type="radio" name="addresses"></input>
                    <Written>
                        <p className="name">Hritik Kumar</p>
                        <p className="address">21,22 Ganpati Vihar, Rakdi, Sodala, Jaipur - 302006</p>
                        <PhoneNumber><Io5.IoCall className="phoneCall"/><p>9782322536</p></PhoneNumber>
                    </Written>
                    <CTA>
                        <Io5.IoPencil className="editPencil"/>
                        <Ai.AiFillDelete className="deleteDustbin"/>
                    </CTA>
                </AddressSampleOne>
                <AddressSampleTwo>
                    <input type="radio" name="addresses"></input>
                    <Written>
                        <p className="name">Hritik Kumar</p>
                        <p className="address">21,22 Ganpati Vihar, Rakdi, Sodala, Jaipur - 302006</p>
                        <PhoneNumber><Io5.IoCall className="phoneCall"/><p>9782322536</p></PhoneNumber>
                    </Written>
                    <CTA>
                        <Io5.IoPencil className="editPencil"/>
                        <Ai.AiFillDelete className="deleteDustbin"/>
                    </CTA>
                </AddressSampleTwo>
                <Text>
                    <p>You Are On The Way To Choose Expert Technician To Repair Your Mobile</p>
                </Text>
                <Submit>
                    <input type="submit" value="Continue" />
                </Submit>
            </StoredAdress>
        </Address>

        </>
    )
}
const Address = styled.div`
display : inline-block;
width : 100%;
height : auto;
`
const NewAddress = styled.div`
display : flex;
align-items : center;
justify-content : center;
color : #281A60;
h3{
    margin-left : 10px; 
    cursor : pointer;
}
.addCircle{
    font-size : 2rem;
    cursor : pointer;
}
margin : 20px 40px;
`
const StoredAdress = styled.form`
width : 100%;
display : flex;
justify-content : space-between;
flex-wrap : wrap;
padding : 20px 20px;
`
const AddressSampleOne = styled.div`
width : 48%;
height : auto;
text-align : center;
display : flex;
align-items : center;
justify-content : space-evenly;
border : 1.5px solid #561D9C;
border-radius : 10px;
padding : 10px 0;
margin-bottom: 20px;
`
const AddressSampleTwo = styled(AddressSampleOne)``
const Written = styled.div`
width :70%;
.address {
    color : rgba(100,100,100,1);
} 
`
const PhoneNumber = styled.div`
display : flex;
align-items : center;
justify-content : center;
p{
    color : rgba(100,100,100,1);
    margin : 0 10px;
}
.phoneCall{
    color : #281A60;
}
`
const CTA = styled.div`
display : flex;
flex-direction : column;
height : 100%;
justify-content : space-evenly;
align-items : center;
.editPencil, .deleteDustbin{
    font-size : 1.5rem;
    color : #281A60;
}
`
const Text = styled.div`
width : 43%;
text-align : center;
margin-top: 20px;
p{
    font-size : 1.3rem;
    color : grey;
}
`
const Submit = styled.div`
width : 43%;
margin-top: 20px;
display : flex;
justify-content : center;
align-items : center;
input{
    width : 80%;
    height : 40px;
    border-radius : 10px;
    background-color : #281A60;
    color : white;
    font-size : 1.3rem;
`

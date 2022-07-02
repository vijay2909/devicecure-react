import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import '../index.css';
import axios from "./axios.js";

export default function AddNewAddressSection(props){

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    // const [altNumber, setAltNumber] = useState<string | null>(null);
    const [altNumber, setAltNumber] = useState("");
    const [house, setHouse] = useState("");
    const [street, setStreet] = useState("");
    // const [landmark, setLandmark] = useState<string | null>(null);
    const [landmark, setLandmark] = useState("");
    const [pincode, setPincode] = useState("");
    const [addType, setAddType] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    }
    const handleAltNumber = (e) => {
        setAltNumber(e.target.value)
    }
    const handleHouse = (e) => {
        setHouse(e.target.value);

    }
    const handleStreet = (e) => {
        setStreet(e.target.value);

    }
    const handleLandmark = (e) => {
        setLandmark(e.target.value);

    }
    const handlePincode = (e) => {
        setPincode(e.target.value);

    }
    const handleAddType = (e) => {
        setAddType(e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const auth = 'Bearer ' + localStorage.getItem('token');
        axios.post("api/Address",
        {
            name : name,
            phone_number : phoneNumber,
            alternate_number : altNumber,
            house_number : house,
            street : street,
            pin_code : pincode,
            address_type : addType,
            landmark : landmark
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
        navigate("/second-page");
    }

    return(
        <>
        <NewAddress className="container">
        <Heading><h1>Adding New Address</h1></Heading>
            <AddingForm onSubmit={handleSubmit}>
                <Name>
                    <label>Name : </label>
                    <input type="text" value={name} onChange={handleName} />
                </Name>
                <PhoneNumber>
                    <label>Phone Number : </label>
                    <input type="text" value={phoneNumber} onChange={handlePhoneNumber} />
                </PhoneNumber>
                <AltNumber>
                    <label>Alternative Phone Number : </label>
                    <input type="text" value={altNumber} onChange={handleAltNumber} />
                </AltNumber>
                <HouseNumber>
                    <label>House/Plot Number : </label>
                    <input type="text" value={house} onChange={handleHouse} />
                </HouseNumber>
                <Street>
                    <label>Street : </label>
                    <input type="text" value={street} onChange={handleStreet} />
                </Street>
                <Landmark>
                    <label>Landmark : </label>
                    <input type="text" value={landmark} onChange={handleLandmark} />
                </Landmark>
                <Pincode>
                    <label>Pin Code : </label>
                    <input type="text" value={pincode} onChange={handlePincode} />
                </Pincode>
                <AddressType>
                    <label>Address Type : </label>
                    <AddTypeRadios>
                        <HomeRadio>
                            <input type="radio" name="add_type" value="HOME" onClick={handleAddType} />
                            <label>Home</label>
                        </HomeRadio>
                        <OfficeRadio>
                            <input type="radio" name="add_type" value="OFFICE" onClick={handleAddType} />
                            <label>Office</label>
                        </OfficeRadio>
                        <OtherRadio>
                            <input type="radio" name="add_type" value="OTHER" onClick={handleAddType} />
                            <label>Other</label>
                        </OtherRadio>
                    </AddTypeRadios>
                </AddressType>
                <Submit>
                    <input type="submit" value="Add"/>
                </Submit>
            </AddingForm>
        </NewAddress>    
        </>
    )
}
const NewAddress = styled.div``
const Heading = styled.div`
text-align : center;
margin : 20px 0;
`
const AddingForm = styled.form`
width: 100%;
// height : 100vh;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
`
const Name = styled.div`
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
`
const PhoneNumber = styled(Name)``
const AltNumber = styled(Name)``
const HouseNumber = styled(Name)``
const Street = styled(Name)``
const Pincode = styled(Name)``
const Landmark = styled(Name)``
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
`
const AddressType = styled.div`
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
`
const AddTypeRadios = styled.div`
width : 100%;
text-align : center;
`
const HomeRadio = styled.div`
width : 100%;
label{
    margin-left : 5px;
}
`
const OfficeRadio = styled(HomeRadio)``
const OtherRadio = styled(HomeRadio)``

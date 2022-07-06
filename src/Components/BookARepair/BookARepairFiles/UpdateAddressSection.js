import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import '../index.css';
import axios from "./axios.js";
import Header1 from "../../Homepage/Header1";
import Header2 from "../../Homepage/Header2";
import Footer from "../../Homepage/Footer";

function UpdateAddressSection(props){

    const navigate = useNavigate();

    useEffect(() => {
        console.log(props.addId);
        const auth = 'Bearer ' + localStorage.getItem('token');
        axios.get(`api/Address/${props.addId}`,
        {
            headers: 
            {
                Authorization : auth
            }
        })
        .then((res) => {
            setName(res.data.data.name);
            setPhoneNumber(res.data.data.phone_number);
            setAltNumber(res.data.data.alternate_number);
            setHouse(res.data.data.house_number);
            setStreet(res.data.data.street);
            setLandmark(res.data.data.landmark);
            setPincode(res.data.data.pin_code);
            setAddType(res.data.data.address_type);
        })
        .catch((err) => {
            console.log(err);
        })
    },[])

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [altNumber, setAltNumber] = useState("");
    const [house, setHouse] = useState("");
    const [street, setStreet] = useState("");
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
        const auth = 'Bearer ' + localStorage.getItem('token')
        axios.put(`api/Address/${props.addId}`,
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
        });
        navigate("/second-page");
    }

    return(
        <>
        <Header1 />
        <Header2 />
        <UpdateAddress className="container">
            <Heading><h1>Updating Address</h1></Heading>
            <UpdatingForm onSubmit={handleSubmit}>
                <Name>
                    <label>Name : </label>
                    <input type="text" value={name} onChange={handleName} required />
                </Name>
                <PhoneNumber>
                    <label>Phone Number : </label>
                    <input type="text" value={phoneNumber} onChange={handlePhoneNumber} required />
                </PhoneNumber>
                <AltNumber>
                    <label>Alternative Phone Number : </label>
                    <input type="text" value={altNumber} onChange={handleAltNumber} required />
                </AltNumber>
                <HouseNumber>
                    <label>House/Plot Number : </label>
                    <input type="text" value={house} onChange={handleHouse} required />
                </HouseNumber>
                <Street>
                    <label>Street : </label>
                    <input type="text" value={street} onChange={handleStreet} required />
                </Street>
                <Landmark>
                    <label>Landmark : </label>
                    <input type="text" value={landmark} onChange={handleLandmark} required />
                </Landmark>
                <Pincode>
                    <label>Pin Code : </label>
                    <input type="text" value={pincode} onChange={handlePincode} required />
                </Pincode>
                <AddressType>
                    <label>Address Type : </label>
                    <AddTypeRadios>
                        <HomeRadio>
                            <input type="radio" name="add_type" value="HOME" onClick={handleAddType} required />
                            <label>Home</label>
                        </HomeRadio>
                        <OfficeRadio>
                            <input type="radio" name="add_type" value="OFFICE" onClick={handleAddType} required />
                            <label>Office</label>
                        </OfficeRadio>
                        <OtherRadio>
                            <input type="radio" name="add_type" value="OTHER" onClick={handleAddType} required />
                            <label>Other</label>
                        </OtherRadio>
                    </AddTypeRadios>
                </AddressType>
                <Submit>
                    <input type="submit" value="Add"/>
                </Submit>
            </UpdatingForm>
        </UpdateAddress>  
        <Footer />  
        </>
    )
}
 export default UpdateAddressSection
const UpdateAddress = styled.div``
const Heading = styled.div`
text-align : center;
margin : 20px 0;
`
const UpdatingForm = styled.form`
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

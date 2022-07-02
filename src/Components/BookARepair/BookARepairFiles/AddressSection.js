import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import '../index.css'
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "./axios";
import * as Io5 from "react-icons/io5";
import * as Ai from "react-icons/ai";
import AddNewAddressSection from "./AddNewAddressSection";

export default function AddressSection(props){

    const navigate = useNavigate();

    const [dataId, setDataId] = useState("")
    const [mainData, setMainData] = useState([]);
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [altNumber, setAltNumber] = useState("");
    const [house, setHouse] = useState("");
    const [street, setStreet] = useState("");
    const [landmark, setLandmark] = useState("");
    const [pincode, setPincode] = useState("");
    const [addType, setAddType] = useState("");

    useEffect(() => {
        const auth = 'Bearer ' + localStorage.getItem('token');
        axios.get("api/Address",
        {
            headers: 
            {
                Authorization : auth
            }
        })
        .then((res) => {
            console.log(res.data.data);
            setMainData(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        })
    },[]);

    // const collectiveData = mainData.map((data,index) => {
    //     setName(data.name);
    //     setPhoneNumber(data.phone_number);
    //     setAltNumber(data.alternate_number);
    //     setHouse(data.house_number);
    //     setStreet(data.street);
    //     setLandmark(data.landmark);
    //     setPincode(data.pin_code);
    //     setAddType(data.address_type);

    //     return(
    //             <AddressSampleOne>
    //                 <input type="radio" name="addresses"></input>
    //                 <Written>
    //                     <p className="name">{name}</p>
    //                     <p className="address">{house}, {street}, {landmark} - {pincode}</p>
    //                     <PhoneNumber>
    //                         <Io5.IoCall className="phoneCall"/><p>{phoneNumber}</p><p>{altNumber}</p>
    //                     </PhoneNumber>
    //                 </Written>
    //             </AddressSampleOne>
    //     )
    // });

    const handleNewAddress = (e) =>{
        e.preventDefault();
        navigate("/add-new-address");
    };

    const handleAddClick = (e) =>{
        console.log("clicked", e.target);
        setDataId(e.target.value);

    }

    const handleEdit = () => {
        console.log("edit clicked");
        navigate("/update-address-page");
    };

    const handleDelete = () => {
        console.log("/delete clicked");
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate("/third-page");
    };

    return(
        <>
        <Address>
            <NewAddress>
                <Io5.IoAddCircle className="addCircle"/>
                <h3 onClick={handleNewAddress}>Add New Address</h3>
            </NewAddress>
            <StoredAddress onSubmit={handleSubmit}>
                {
                    mainData.map((data,index) =>
                        <AddressSampleOne key={index}>
                            <input type="radio" name="addresses" onClick={handleAddClick} value={data.id}></input>
                            <Written>
                                <p className="name">{data.name}</p>
                                <p className="address">{data.house_number}, {data.street}, {data.landmark} - {data.pin_code}</p>
                                <PhoneNumber>
                                    <Io5.IoCall className="phoneCall"/><p>{data.phone_number}</p><p>{data.alternate_number}</p>
                                </PhoneNumber>
                            </Written>
                            <CTA>
                                <Io5.IoPencil className="editPencil" value={data.id} onClick={handleEdit}/>
                                <Ai.AiFillDelete className="deleteDustbin" value={data.id} onClick={handleDelete}/>
                            </CTA>
                        </AddressSampleOne>
                    )
                }
                <Bottom>
                    <Text>
                        <p>You Are On The Way To Choose Expert Technician To Repair Your Mobile</p>
                    </Text>
                    <Submit>
                        <input type="submit" value="Continue" />
                    </Submit>
                </Bottom>
            </StoredAddress>
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
const StoredAddress = styled.form`
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
    margin-left : 10px;
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
    cursor : pointer
}
`
const Bottom = styled.div`
width : 100%;
display : flex;
justify-content : space-between;
flex-wrap : wrap;
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
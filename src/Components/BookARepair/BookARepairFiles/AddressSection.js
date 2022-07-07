import React, {useEffect, useState} from "react";
import '../index.css'
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "./axios";
import * as Io5 from "react-icons/io5";
import * as Ai from "react-icons/ai";

export default function AddressSection(props){

    // useEffect(() => {
    //     window.localStorage.setItem("TotalDetailsData", JSON.stringify(props.totalDetailsData));
    // }, [props.totalDetailsData]);

    // useEffect(() => {
    //     props.setTotalDetailsData(window.localStorage.getItem("TotalDetailsData"));
    //     console.log("try", props.totalDetailsData);
    // }, []);

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const [addressId, setAddressId] = useState("")
    const [mainData, setMainData] = useState([]);
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [altNumber, setAltNumber] = useState("");
    const [house, setHouse] = useState("");
    const [street, setStreet] = useState("");
    const [landmark, setLandmark] = useState("");
    const [pincode, setPincode] = useState("");
    const [addType, setAddType] = useState("");

    const auth = 'Bearer ' + localStorage.getItem('token');

    useEffect(() => {
        console.log(props.totalDetailsData)
        axios.get("api/Address",
        {
            headers: 
            {
                Authorization : auth
            }
        })
        .then((res) => {
            setMainData(res.data.data);
            setLoading(false)
        })
        .catch((err) => {
            console.log(err);
        })
    },[]);

    const handleRadioClick = (e) =>{
        const addressData = JSON.parse(e.target.value);
        console.log("data", addressData);
        console.log("address id", addressData.id);
        setAddressId(addressData.id);
        setName(addressData.name)
        setPhoneNumber(addressData.phone_number)
        setAltNumber(addressData.alternate_number)
        setHouse(addressData.house_number)
        setStreet(addressData.street)
        setLandmark(addressData.landmark)
        setPincode(addressData.pin_code)
        setAddType(addressData.address_type)
    };

    const handleNewAddress = (e) =>{
        e.preventDefault();
        navigate("/add-new-address");
    };

    const handleEdit = (e) => {
        console.log("edit clicked");
        const EditLi = e.target.closest(".editLi");
        const EditLiId = JSON.parse(EditLi.getAttribute("value")).id;
        console.log("EditLiId", EditLiId);
        props.setAddId(EditLiId);
        // props.setAddressId
        navigate("/update-address-page");
    };

    const handleDelete = (e) => {
        console.log("delete clicked");
        const DeleteLi = e.target.closest(".deleteLi");
        const DeleteLiId = JSON.parse(DeleteLi.getAttribute("value")).id;
        console.log("DeleteLiId", DeleteLiId);
        props.setAddId(DeleteLiId);

        axios.delete(`api/Address/${DeleteLiId}`,
        {
            headers: 
            {
                Authorization : auth
            }
        })
        .then((res)=>{
            console.log("this is res", res);
            document.location.reload(true);
        })
        .catch((err)=>{
            console.log("this is err", err);
        })
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        props.setTotalDetailsData({
            ...props.totalDetailsData,
            name : name,
            phone_number : phoneNumber,
            alternate_number : altNumber,
            house_number : house,
            street : street,
            pin_code : pincode,
            address_type : addType,
            landmark : landmark,
            address_id : addressId,
            wallet_money : "",
            coupon_id : ""
        })

        navigate("/third-page")
    };

    return(
        <>
        {loading ? <h1>PAGE LOADING...</h1> : 
        <Address>
            <NewAddress>
                <Io5.IoAddCircle className="addCircle"/>
                <h3 onClick={handleNewAddress}>Add New Address</h3>
            </NewAddress>
            <StoredAddress onSubmit={handleSubmit}>
                {
                    mainData.map((data,index) =>
                        <AddressSampleOne key={index}>
                            <input type="radio" required name="addresses" onClick={handleRadioClick} value={JSON.stringify(data)}></input>
                            <Written>
                                <p className="name">{data.name}</p>
                                <p className="address">{data.house_number}, {data.street}, {data.landmark} - {data.pin_code}</p>
                                <PhoneNumber>
                                    <Io5.IoCall className="phoneCall"/><p>{data.phone_number}</p><p>{data.alternate_number}</p>
                                </PhoneNumber>
                            </Written>
                            <CTA>
                                <li className="editLi"  value={JSON.stringify(data)} ><Io5.IoPencil className="editPencil" onClick={handleEdit} /></li>
                                <li className="deleteLi"  value={JSON.stringify(data)} ><Ai.AiFillDelete className="deleteDustbin" onClick={handleDelete} /></li>
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
        }
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
const CTA = styled.ul`
height : 100%;
display : flex;
flex-direction : column;
justify-content : space-evenly;
list-style-type : none;
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
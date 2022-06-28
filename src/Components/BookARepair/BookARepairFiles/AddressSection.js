import React from "react";
import ReactDOM from "react-dom";
import '../index.css'
import styled from "styled-components";
import * as Io5 from "react-icons/io5";
import * as Ai from "react-icons/ai";

export default function AddressSection(props){
    return(
        <>
        <Address>
            <NewAddress>
                <Io5.IoAddCircle className="addCircle"/>
                <h3>Add New Address</h3>
            </NewAddress>
            <StoredAdress>
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
color : #281A60;

h3{
    margin : 0 10px; 
    cursor : pointer;
}
.addCircle{
    font-size : 2rem;
    cursor : pointer;
}
margin : 20px 40px 20px;
`
const StoredAdress = styled.form`
width : 100%;
display : flex;
justify-content : space-between;
`
const AddressSampleOne = styled.div`
width : 40%;
height : auto;
text-align : center;
display : flex;
align-items : center;
justify-content : space-evenly;
margin : 20px 40px 20px;
border : 1.5px solid #561D9C;
border-radius : 10px;
padding : 10px;
`
const AddressSampleTwo = styled(AddressSampleOne)``
const Written = styled.div`
width : 70%;
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
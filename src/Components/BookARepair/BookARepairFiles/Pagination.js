import React from "react";
import ReactDOM from "react-dom";
import '../index.css';
import styled from "styled-components"; 
import * as Io5 from "react-icons/io5";

export default function Pagination(props){

    const goToDetails = (e) => {
        props.setPageNum(1);
    }
    const goToAddress = (e) => {
        props.setPageNum(2);
    }

    return(
        <>
        <PageNumber>
            <MainDiv className="mainDiv" onClick={goToDetails}>
            <div className={`${props.activePage1} subDiv`}><h1>1</h1></div>
            <p className={`${props.activeUnderline1}`}><Io5.IoPencil className={`editPencil ${props.activeEdit1}`}
            />Mobile</p>
            </MainDiv>
            <span></span>
            <MainDiv className="mainDiv" onClick={goToAddress}>
            <div className={`${props.activePage2} subDiv`}><h1>2</h1></div>
            <p className={`${props.activeUnderline2}`}><Io5.IoPencil className={`editPencil ${props.activeEdit2}`}  
            />Address</p>
            </MainDiv>
            <span></span>
            <MainDiv className="mainDiv">
            <div className={`${props.activePage3} subDiv`}><h1>3</h1></div>
            <p>Review</p>
            </MainDiv>
        </PageNumber>
        </>
    )
}
const PageNumber = styled.div`
width : 70%;
margin : 20px auto 30px;
display : flex;
justify-content : center;
align-items : center;
span{
    width : 100px;
    height : 0;
    border-top: 2px solid black;
}
`
const MainDiv = styled.div`
display : flex;
flex-direction : column;
justify-content : center;
align-items : center;
position : relative;
div.subDiv{
    width : 50px;
    height : 50px;
    background-color : #ccc;
    display : flex;
    justify-content : center;
    align-items : center;
    border-radius : 50px;
}
p{
    display : flex;
    align-items : center;
    position : absolute;
    bottom : -28px;
    left : -5px;
}
div.active{
    background-color : #281A60;
    color : white;
    cursor : pointer;
}
.editPencil{
    display : none;
    margin-right : 2px;
}
.activeEdit{
    display : block;
}
p.activeUnderline{
    border-bottom : 1px solid black;
    cursor : pointer;
}
`
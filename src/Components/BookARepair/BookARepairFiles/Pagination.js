import React from "react";
import ReactDOM from "react-dom";
import '../index.css';
import styled from "styled-components"; 

export default function Pagination(props){
    return(
        <>
        <PageNumber>
            <div className={props.activePage1}><h1>1</h1></div>
            <span></span>
            <div className={props.activePage2}><h1>2</h1></div>
            <span></span>
            <div className={props.activePage3}><h1>3</h1></div>
        </PageNumber>
        </>
    )
}
const PageNumber = styled.div`
width : 70%;
margin : 20px auto;
display : flex;
justify-content : center;
align-items : center;
div{
    width : 50px;
    height : 50px;
    background-color : #ccc;
    display : flex;
    justify-content : center;
    align-items : center;
    border-radius : 50px;
}
div.active{
    background-color : #281A60;
    color : white;
}
span{
    width : 100px;
    height : 0;
    border-top: 2px solid black;
}
`
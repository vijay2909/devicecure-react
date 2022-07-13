import React from "react";
import ReactDOM from "react-dom";
import "./UserOrders.css";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";
import Header1 from "../Homepage/Header1";
import Header2 from "../Homepage/Header2";
import Footer from "../Homepage/Footer";

export default function UserOrders(props){
    return(
        <>
        <Header1 />
        <Header2 />

        <NAV>
            <h1>Your Orders</h1>
            <ul>
                <li><Link to="">Mobile Repairing</Link></li>
                <li><Link to="screen-protction">Screen Protection</Link></li>
                <li><Link to="accessories">Accessories</Link></li>
            </ul>
        </NAV>
            <Outlet />
        <Footer />
        </>
    )
}

// first user daalta, easy
// first apge pe nhi daalta, props = empty = set




const NAV = styled.div`
width : 80%;
margin : 0 auto;
ul{
    list-style-type: none;
    display : flex;
    justify-content : space-evenly;
}
`
const Container = styled.div`
width : 90%;
margin : 50px auto;
padding : 50px;
border : 1px solid black;
border-radius : 20px;
box-shadow : 10px 10px 10px grey;
`
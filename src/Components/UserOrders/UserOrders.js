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
const NAV = styled.div`
width : 80%;
margin : 20px auto;
ul{
    list-style-type: none;
    display : flex;
    justify-content : space-evenly;
}
`

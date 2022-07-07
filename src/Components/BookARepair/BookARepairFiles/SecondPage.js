import React, { useState, useEffect } from "react";
import '../index.css';
import styled from "styled-components";
import Pagination from "./Pagination";
import AddressSection from "./AddressSection";
import Header1 from "../../Homepage/Header1";
import Header2 from "../../Homepage/Header2";
import Footer from "../../Homepage/Footer";

export default function SecondPage(props){
    // useEffect(() => {
    //     props.setTotalDetailsData(window.sessionStorage.getItem("TotalDetailsData"));
    //     props.setAddId(window.sessionStorage.getItem("AddressId"));
    // }, []);
    
    // useEffect(() => {
    //     window.sessionStorage.setItem("TotalDetailsData", props.totalDetailsData);
    //     window.sessionStorage.setItem("AddressId", props.addId);
    // }, [props.totalDetailsData, props.addId]);
    return(
        <>
        <Header1 />
        <Header2 />
        <div className="container">
            <Pagination activePage1="active" activePage2="active"/>
            <AddressSection 
            totalDetailsData={props.totalDetailsData} 
            setTotalDetailsData={props.setTotalDetailsData}
            addId={props.addId} setAddId={props.setAddId}
            />
        </div>
        <Footer />
        </>
    )
}
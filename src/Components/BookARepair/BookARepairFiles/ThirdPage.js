import React, { useState, useEffect } from "react";
import '../index.css';
import styled from "styled-components";
import Pagination from "./Pagination";
import ReviewSection from "./ReviewSection";
import Header1 from "../../Homepage/Header1";
import Header2 from "../../Homepage/Header2";
import Footer from "../../Homepage/Footer";

export default function ThirdPage(props){
    // useEffect(() => {
    //     console.log("sessionStorage");
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
            <Pagination activePage1="active" activePage2="active" activePage3="active" />
            <ReviewSection
            totalDetailsData={props.totalDetailsData} 
            setTotalDetailsData={props.setTotalDetailsData} 
            />
        </div>
        <Footer />
        </>
    )
}
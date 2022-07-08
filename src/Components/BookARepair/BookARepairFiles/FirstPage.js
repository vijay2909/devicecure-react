import React, { useState, useEffect } from "react";
import "../index.css";
import styled from "styled-components";
import Pagination from "./Pagination";
import DetailsSection from "./DetailsSection";
import Header1 from "../../Homepage/Header1";
import Header2 from "../../Homepage/Header2";
import Footer from "../../Homepage/Footer";

export default function FirstPage(props){
    return(
        <>
        <Header1 />
        <Header2 />
        <div className="container">
            <Pagination activePage1="active" />
            <DetailsSection 
            totalDetailsData={props.totalDetailsData} 
            setTotalDetailsData={props.setTotalDetailsData} 
            />
        </div>
        <Footer />
        </>
    )
}
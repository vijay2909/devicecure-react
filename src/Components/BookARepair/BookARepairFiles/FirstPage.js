import React from "react";
import ReactDOM from "react-dom";
import "../index.css";
import styled from "styled-components";
import Pagination from "./Pagination";
import DetailsSection from "./DetailsSection";

export default function FirstPage(props){
    return(
        <>
        <div className="container">
            <Pagination activePage1="active" />
            <DetailsSection />
        </div>
        </>
    )
}
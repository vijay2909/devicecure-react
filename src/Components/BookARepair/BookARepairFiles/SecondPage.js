import React from "react";
import ReactDOM from "react-dom";
import '../index.css';
import styled from "styled-components";
import Pagination from "./Pagination";
import AddressSection from "./AddressSection";

export default function SecondPage(props){
    return(
        <>
        <div className="container">
            <Pagination activePage1="active" activePage2="active"/>
            <AddressSection />
        </div>
        </>
    )
}
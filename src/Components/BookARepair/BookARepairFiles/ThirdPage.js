import React from "react";
import ReactDOM from "react-dom";
import '../index.css';
import styled from "styled-components";
import Pagination from "./Pagination";

export default function ThirdPage(props){
    return(
        <>
        <div className="container">
            <Pagination activePage1="active" activePage2="active" activePage3="active" />
        </div>
        </>
    )
}
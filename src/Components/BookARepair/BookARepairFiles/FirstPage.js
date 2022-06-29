import React from "react";
import ReactDOM from "react-dom";
import "../index.css";
import styled from "styled-components";
import Pagination from "./Pagination";
import DetailsSection from "./DetailsSection";
import { BrowserRouter as Router, Link, Routes, Route} from "react-router-dom"
import SecondPage from "./SecondPage";

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
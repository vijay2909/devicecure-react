import React from "react";
import ReactDOM from "react-dom";
import '../index.css';
import styled from "styled-components";
import FinalThankYouSection from "./FinalThankYouSection";
import Header1 from "../../Homepage/Header1";
import Header2 from "../../Homepage/Header2";
import Footer from "../../Homepage/Footer";

export default function FourthPage(props){
    return(
        <>
        <Header1 />
        <Header2 />
        <div className="container">
            <FinalThankYouSection />
        </div>
        <Footer />
        </>
    )
}
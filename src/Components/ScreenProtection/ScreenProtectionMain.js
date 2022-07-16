import React from 'react';
import "./ScreenProtectionMain.css";
import styled from 'styled-components';
import HeaderSP from './Components/HeaderSP';
import SlideSP from './Components/SlideSP';
import Header1 from '../Homepage/Header1';
import Header2 from '../Homepage/Header2';
import Footer from '../Homepage/Footer';

export default function ScreenProtectionMain(props) {
  return (
    <>
    <Header1 />
    <Header2 />
    <MAINCONTAINER>
        <HeaderSP />
        <Form>
            <SlideSP 
            question="What is your device Brand?"
            answerState="select" 
            text="Choose brand name or enter manually"
            bothButton="false"/>

            <SlideSP 
            question="What is your device Model?"
            answerState="select" 
            text="Choose model name or enter manually"
            rightBtnState="button"
            leftBtnState="button"
            leftBtn="&lt; PREV"
            rightBtn="NEXT &gt;"/>

            <SlideSP 
            question="How much did you buy it for?"
            inputType="text"
            inputPlaceholder="Price?"
            answerState="input" 
            text="Enter the amount as per your invoice"
            rightBtnState="button"
            leftBtnState="button"
            leftBtn="&lt; PREV"
            rightBtn="NEXT &gt;"/>    

            <SlideSP 
            question="when did you buy it?"
            inputType="date"
            answerState="input"
            text="Enter your mobile purchase date"
            rightBtnState="button"
            leftBtnState="button"
            leftBtn="&lt; PREV"
            rightBtn="NEXT &gt;"/>

            <SlideSP 
            question="Whats your mobile IMEI No.?"
            inputType="text"
            inputPlaceholder="IMEI No."
            answerState="input"
            rightBtnState="submit"
            leftBtnState="button"
            leftBtn="&lt; PREV"
            rightBtn="See Best Plans &gt;"/>
        </Form>
    </MAINCONTAINER>
    <Footer />
    </>
  )
}
const MAINCONTAINER = styled.div`
width : 100%;
`
const Form = styled.form`
width : 50%;
margin : 0 auto;
`
import React from "react";
import ReactDOM from "react-dom";
import '../index.css';
import styled from "styled-components";

export default function GadgetsSection(props){
    return(
        <>
        <Main>
            <GadgetsBox>
                <Heading>
                    <h1>Add Some Cool Gadgets</h1>
                </Heading>
            </GadgetsBox>
        </Main>
        </>
    )
} 
const Main = styled.div`
width : 100%;
padding : 10px 0;
`
const GadgetsBox = styled.div`
width : 90%;
margin : 0 auto;
`
const Heading = styled.div``
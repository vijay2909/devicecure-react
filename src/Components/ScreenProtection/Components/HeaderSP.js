import React from 'react';
import "../ScreenProtectionMain.css";
import styled from 'styled-components';

export default function HeaderSP(props) {
  return (
    <>
        <HeaderContainer>
            <HeadingDiv>
                <h1>Secure Your Mobile Screen With Devicecure</h1>
            </HeadingDiv>
            <LabelDiv>
                <h3>Fill All Details To Choose A Best Plan</h3>
            </LabelDiv>
            <PageNumbers>
                <div className={`${props.activePage1} subDiv`}><h1>1</h1></div>
                <span></span>
                <div className={`${props.activePage2} subDiv`}><h1>2</h1></div>
                <span></span>
                <div className={`${props.activePage3} subDiv`}><h1>3</h1></div>
                <span></span>
                <div className={`${props.activePage2} subDiv`}><h1>4</h1></div>
                <span></span>
                <div className={`${props.activePage3} subDiv`}><h1>5</h1></div>
            </PageNumbers>
        </HeaderContainer>
    </>
  )
}
const HeaderContainer = styled.div`
width : 100%;
display : inline-block;
`
const HeadingDiv = styled.div`
text-align : center;
margin : 20px 0;
color : #281A60;
`
const LabelDiv = styled(HeadingDiv)`
// display : inline-block;
width : 100%;
color : black;
`
const PageNumbers = styled.div`
margin : 20px 0;
display : flex;
justify-content : center;
align-items : center;
div{
    width : 50px;
    height : 50px;
    background-color : #ccc;
    display : flex;
    justify-content : center;
    align-items : center;
    border-radius : 50px;
}
span{
    width : 100px;
    height : 0;
    border-top: 2px solid black;
}
`

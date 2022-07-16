import React from 'react';
import "../ScreenProtectionMain.css";
import styled from 'styled-components';

export default function SlideSP(props) {
  return (
    <>
        <SliderDiv>
          <QuestionDiv>
            <p>{props.question}</p>
          </QuestionDiv>
          <AnswerDiv>
            {
            props.answerState == "select"  ?
            (
              <select required>
                <option value="" selected disabled hidden>Choose Something</option>
                <option>Brand/Model One</option>
                <option>Brand/Model Two</option>
              </select>
            ) : 
            (
              <input type={props.inputType} placeholder={props.inputPlaceholder} required/>
            )
            }
          </AnswerDiv>
          <TextDiv>
            <p>{props.text}</p>
          </TextDiv>
          <CTA>
            {
              props.bothButton == "false" ? 
              (<input style={{marginLeft : "auto"}} type="button" value="NEXT &gt;" />)
              :
              (
              <>
              <input type={props.leftBtnState} value={props.leftBtn} />
              <input type={props.rightBtnState} value={props.rightBtn} />
              </>
              )
            }
          </CTA>
        </SliderDiv>
    </>
  )
}
const SliderDiv = styled.div`
border : 1px solid black;
border-radius : 10px;
padding : 10px;
margin : 20px 0 40px;
`
const QuestionDiv = styled.div`
width : 100%;
margin : 10px 0;
`
const AnswerDiv = styled(QuestionDiv)`
select, input{
  width : 100%;
  padding : 10px;
  border : 1px solid black;
  border-radius : 10px;
}
`
const TextDiv = styled(QuestionDiv)``
const CTA = styled.div`
width : 100%;
margin : 20px 0 10px;
display : flex;
justify-content : space-between;
input{ 
  background-color : white;
  border : none;
  cursor : pointer;
  font-weight : bolder;
  font-size : 1rem;
}
`
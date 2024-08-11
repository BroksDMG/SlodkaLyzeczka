import styled from "styled-components";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

interface QestionCardProps{
    answer:string
    question:string
}

const QuestionCardContainer=styled.div`
   width:100%;
   height:min-content;
   position:relative; 
   border-top:2px solid;
   flex:1;
`
const Question=styled.div`
    width:100%;
    min-height:6vh;
    display:flex;
    align-items:center;
    justify-content:space-between;
    cursor: pointer;
    font-weight:bold;
`
const Answer=styled.div<{show:boolean}>`
    width:100%;
    transition: opacity 0.3s ease-in-out, max-height 0.3s ease-in-out;
    opacity: ${props => (props.show ? 1 : 0)};
    max-height: ${props => (props.show ? '100vh' : '0')}; /* For smooth collapse */
    overflow: hidden;
`
const QuestionCard:React.FC<QestionCardProps>=({answer,question})=>{
   const [showAnswer,setShowAnswer]=useState(false);
   console.log(showAnswer)
    return(
        <QuestionCardContainer>
         <Question onClick={()=>setShowAnswer((e)=>!e)}>
            <p>{question}</p>
        < MdOutlineKeyboardArrowDown/>
         </Question>
        <Answer show={showAnswer}>
            {answer}
        </Answer>
         
        </QuestionCardContainer>
        )
}


export default QuestionCard;
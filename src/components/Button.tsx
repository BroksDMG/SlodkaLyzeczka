import React from "react"
import styled from "styled-components"

interface ButtonProps{
    children:React.ReactNode;
    radius:string;
    fontSize?:string
    onClick?:()=>void;
}

const ButtonContainer=styled.button<ButtonProps>`
color:${props=>props.theme.colors.textWhite};
max-width:max-content;
padding:10px;
color:${props=>props.theme.colors.textWhite};
border-radius:${props=>props.radius};
text-align:center;
background:${props=>props.theme.colors.gold};
opacity:70%;
font-size:${props=>props.fontSize||props.theme.textSize.large};
height:max-content;
display:flex;
justify-content:center;
align-items:center;
border:none;
cursor: pointer;
transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: ${(props) => props.theme.colors.textWhite};
    color: ${(props) => props.theme.colors.gold};
  }

  &:active {
    background: ${(props) => props.theme.colors.gold};
    transform: translateY(4px); 
  }
`
const Button :React.FC<ButtonProps>=({onClick,children, radius,fontSize})=>(
  <ButtonContainer onClick={onClick} radius={radius} fontSize={fontSize}>
    {children}
  </ButtonContainer>
)

export default Button

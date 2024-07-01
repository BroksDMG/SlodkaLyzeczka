import { createGlobalStyle } from "styled-components"

const GlobalStyles=createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${(props)=>props.theme.fonts.CrimsonText};
    background-color: ${(props)=>props.theme.colors.background};
    color: ${(props)=>props.theme.colors.text};
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }`
export default  GlobalStyles
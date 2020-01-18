import { createGlobalStyle } from "styled-components"
import vars from "./vars"
import reset from "./reset"

const GlobalStyle = createGlobalStyle`
  ${vars};
  ${reset};
  
  html {
    /* Sets 1 REM to 10px */
    font-size: 62.5%;
  }

  body {
    background-color: var(--bgColor);
    color: var(--textColor);
    font-family: var(--bodyFont);
    font-size: var(--baseFontSize);
    line-height: 1.5;
  }

  #modal-root {
    position: relative;
    z-index: var(--highestLevel);
  }

  main {
    overflow: hidden;
    background: var(--white);
    min-height: 60vh;
  }


  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
    margin: var(--margins);
    line-height: 1.2;
    a {
      color: var(--primaryColor);
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  button,
  nav {
    font-family: var(--headingFont);
  }

  h1 {
    font-size: var(--heading-one);
  }

  h2 {
    font-size: var(--heading-two);
  }

  h3 {
    font-size: var(--heading-three);
  }

  h4 {
    font-size: var(--heading-four);
  }

  h5 {
    font-size: var(--heading-five);
  }

  h6 {
    font-size: var(--heading-six);
  }

  p {
    font-family: var(--bodyFont);
    line-height: 1.45;
    margin: 1.5rem 0;
    &.small {
      font-size: var(--smallFontSize);
    }
    &.large {
      font-size: var(--largeFontSize);
    }
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  input, textarea, select {
    margin: 1.5rem 0;
  }

  label, label span {
    display: block;
  }
`

export default GlobalStyle

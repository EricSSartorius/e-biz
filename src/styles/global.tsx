import { createGlobalStyle } from "styled-components"
import vars from "./vars"
import reset from "./reset"
import { above } from "../styles/breakpoints"

const GlobalStyle = createGlobalStyle`
  ${vars};
  ${reset};

  ${above.large`
    :root {
      --baseFontSize: 1.8rem;
      --heading-one: 6.4rem;
      --heading-two: 4.8rem;
      --heading-three: 3.6rem;
      --margins: 6rem 0 3rem;
      --containerPadding: 0 6rem 3rem;
      --basePadding: 6rem;
    }
  `}
  ${above.medium`
    :root {
      --heading-one: 4.4rem;
      --heading-two: 3.1rem;
      --heading-three: 2.6rem;
      --margins: 4.5rem 0 2.5rem;
      --containerPadding: 0 4.5rem 2.5rem;
      --basePadding: 4.5rem;
    }
  `}
  
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

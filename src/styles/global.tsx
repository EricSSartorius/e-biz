import { createGlobalStyle } from "styled-components"
import vars from "./vars"
import reset from "./reset"

const GlobalStyle = createGlobalStyle`
  ${vars}
  ${reset}
  
  html {
    font-size: 18px;
  }

  :root {
    --baseNavSize: 1rem;
  }


  @media only screen and (min-width: 1200px) {
    :root {
      --baseNavSize: 0.64rem;
    }
    html {
      font-size: 24px;
    }
  }

  body {
    background-color: var(--bgColor);
    color: var(--textColor);
    font-family: var(--bodyFont);
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
    font-weight: bold;
    margin: var(--margin);
    line-height: 1.15;
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
    line-height: 36px;
    margin: 1rem 0;
  }

  p.small {
    font-size: var(--smallFontSize);
  }

  button {
    cursor: pointer;
  }

  input, textarea {
    width: 100%;
  }
`

export default GlobalStyle

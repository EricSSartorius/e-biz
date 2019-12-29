import { createGlobalStyle } from "styled-components"
import vars from "./vars"

const GlobalStyle = createGlobalStyle`
  ${vars}
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  * {
    min-height: 0;
    min-width: 0;
  }

  html {
    font-display: swap;
    box-sizing: border-box;
    /* Sets 1 REM to 10px */
    font-size: 62.5%;
  }
  
  body {
    font-size: 1.6rem;
    margin: 0;
  }
`

export default GlobalStyle

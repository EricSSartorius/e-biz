import { css } from "styled-components"

const reset = css`
  /* Set box-sizing to border-box for all elements */
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  /* Reset margins and paddings on most elements */
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  li,
  p,
  pre,
  blockquote,
  figure,
  hr {
    margin: 0;
    padding: 0;
  }

  /* Removes discs from ul */
  ul {
    list-style: none;
  }

  /* Reset forms and buttons */
  input,
  textarea,
  select,
  button {
    color: inherit;
    font: inherit;
    letter-spacing: inherit;
  }

  input,
  textarea {
    border: 1px solid gray;
  }

  button {
    border: none;
    background-color: transparent;
  }

  button * {
    pointer-events: none;
  }

  /* Easy responsive for media elements */
  embed,
  iframe,
  img,
  object,
  video {
    display: block;
    max-width: 100%;
  }

  /* Useful table styles */
  table {
    table-layout: auto;
    width: 100%;
  }

  /* Hidden */
  [hidden] {
    display: none !important;
  }

  /* noscript styles */
  noscript {
    display: block;
    margin-bottom: 1em;
    margin-top: 1em;
  }

  select {
    background: transparent;
  }
`

export default reset

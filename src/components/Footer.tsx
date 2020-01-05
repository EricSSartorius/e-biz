import React from "react"
import Nav from "./Nav"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterWrapper>
      <p>© {new Date().getFullYear()}</p>
      <Nav />
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.footer`
  width: 100%;
  background: var(--blue-600);
`

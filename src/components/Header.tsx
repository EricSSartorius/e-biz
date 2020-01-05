import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import React from "react"
import Nav from "./Nav"

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
    <Nav />
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const HeaderWrapper = styled.header`
  width: 100%;
  background: var(--blue-600);
`

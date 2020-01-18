import { Link } from "gatsby"
import styled from "styled-components"
import React from "react"
import Nav from "./Nav"
import CartIcon from "./CartIcon"
import { sizes } from "../styles/breakpoints"

type Props = {
  siteTitle: string
}

const links = [
  {
    link: "/store",
    title: "Store",
  },
  {
    link: "/about",
    title: "About",
  },
]

const Header = ({ siteTitle }: Props) => (
  <>
    <HeaderWrapper>
      <InnerHeader>
        <h1 className="logo">
          <Link to="/">{siteTitle}</Link>
        </h1>
        <div className="nav-wrapper">
          <Nav links={links} activeStyle={{ color: "var(--primaryColor)" }} />
          <CartIcon />
        </div>
      </InnerHeader>
    </HeaderWrapper>
  </>
)

export default Header

const HeaderWrapper = styled.header`
  top: 0;
  width: 100%;
  height: 73px;
  background: var(--grey);
  z-index: var(--headerLevel);
  position: sticky;
`

const InnerHeader = styled.div`
  color: white;
  position: relative;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--padding);
  max-width: ${sizes.xLarge / 18}em;
  margin: auto;
  display: flex;
  height: 100%;
  a {
    color: var(--white);
  }
  .logo {
    font-size: var(--baseFontSize);
    margin: 0;
    flex-shrink: 1;
    a {
      display: flex;
      align-items: center;
      background: none;
      svg {
        margin-right: 10px;
      }
    }
  }
  .nav-wrapper {
    display: flex;
    align-items: center;
  }
`

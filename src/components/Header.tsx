import { Link } from "gatsby"
import styled from "styled-components"
import React from "react"
import Nav from "./Nav"
import { sizes } from "../styles/breakpoints"

type Props = {
  siteTitle: string
}

const links = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/store",
    title: "Store",
  },
  {
    link: "/about",
    title: "About",
  },
  {
    link: "/contact",
    title: "Contact",
  },
]

const Header = ({ siteTitle }: Props) => (
  <>
    <HeaderWrapper>
      <InnerHeader>
        <h1 className="logo">
          <Link to="/">{siteTitle}</Link>
        </h1>
        <Nav links={links} />
      </InnerHeader>
    </HeaderWrapper>
  </>
)

export default Header

const HeaderWrapper = styled.header`
  top: 0;
  width: 100%;
  height: 73px;
  background: var(--light-grey);
  z-index: var(--headerLevel);
  position: sticky;
`

const InnerHeader = styled.div`
  color: white;
  position: relative;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  max-width: ${sizes.xLarge / 18}em;
  margin: auto;
  display: flex;
  height: 100%;
  .logo {
    margin: 0;
    flex-shrink: 1;
    a {
      color: white;
      display: flex;
      align-items: center;
      background: none;
      svg {
        margin-right: 10px;
      }
    }
  }
`

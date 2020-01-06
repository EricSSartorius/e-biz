import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
// import Icon from "../components/Icon"
import Social from "../components/Social"
import Nav from "../components/Nav"

type Props = {
  siteTitle: string
  facebook?: string
  twitter?: string
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

const thisYear = new Date().getFullYear()

const Footer = ({ siteTitle, facebook = "", twitter = "" }: Props) => (
  <FooterLayout>
    <h2>
      <Link to="/" aria-label="home page">
        LOGO HERE
      </Link>
    </h2>
    <Nav links={links} />
    {(facebook || twitter) && (
      <Social facebook={facebook} twitter={twitter} siteTitle={siteTitle} />
    )}
    <p className="small">
      ©{thisYear} {siteTitle}, LLC. All rights reserved.
    </p>
    <ul className="sub-nav">
      <li>
        <Link to="/terms" aria-label="terms of use">
          Terms of Use
        </Link>
      </li>
      <li>
        <Link to="/privacy-policy" aria-label="privacy policy">
          Privacy Policy
        </Link>
      </li>
    </ul>
  </FooterLayout>
)

const FooterLayout = styled.footer`
  background: var(--light-grey);
  color: var(--white);
  text-align: center;
  .sub-nav {
    display: flex;
    justify-content: center;
    li {
      margin: 0 10px;
      a {
        color: var(--white);
      }
    }
  }
`

export default Footer

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
// import Icon from "../components/Icon"
import Social from "../components/Social"
import Nav from "../components/Nav"
import { Container, Flex } from "../styles/utils"

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
  <FooterLayout as="footer">
    <Flex>
      <h2 css="margin: 0; font-size: var(--baseFontSize);">
        <Link to="/" aria-label="home page">
          {siteTitle}
        </Link>
      </h2>
      <div css="text-align: center">
        <Nav links={links} />
        <p className="small" css="margin-bottom: 0">
          ©{thisYear} {siteTitle}, LLC. All rights reserved.
        </p>
        <ul className="sub-nav">
          <li>
            <p className="small" css="margin: 0">
              <Link to="/terms" aria-label="terms of use">
                Terms of Use
              </Link>
            </p>
          </li>
          <li>
            <p className="small" css="margin: 0">
              <Link to="/privacy-policy" aria-label="privacy policy">
                Privacy Policy
              </Link>
            </p>
          </li>
        </ul>
      </div>
      {(facebook || twitter) && (
        <Social facebook={facebook} twitter={twitter} siteTitle={siteTitle} />
      )}
    </Flex>
  </FooterLayout>
)

const FooterLayout = styled(Container)`
  padding-top: var(--padding);
  background: var(--dark-grey);
  color: var(--white);
  a {
    color: var(--white);
  }
  .sub-nav {
    display: flex;
    justify-content: center;
    li {
      margin: 0 10px;
    }
  }
`

export default Footer

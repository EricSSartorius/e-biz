import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

type Props = {
  links: []
}

const MainNav = ({ links }) => {
  return (
    <Nav>
      <ul>
        {links.map(link => {
          return (
            <li key={link.link}>
              <Link to={link.link} aria-label={link.title}>
                {link.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </Nav>
  )
}

export default MainNav

const Nav = styled.nav`
  ul li {
    display: inline-block;
    margin-left: 10px;
  }
`

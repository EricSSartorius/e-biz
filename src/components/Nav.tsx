import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

type LinkType = {
  link: string
  title: string
}

type Props = {
  links: LinkType[]
}

const MainNav = ({ links }: Props) => {
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
    > *:last-child {
      margin-left: 20px;
    }
    a:hover {
      transition: 0.3s ease color;
      color: var(--primaryColor);
    }
  }
`

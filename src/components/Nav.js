import React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/page-2">page 2</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav

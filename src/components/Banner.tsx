import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Banner = () => {
  return (
    <Link to="/store">
      <BannerWrapper>
        <h4 css="margin: 0; padding: 1rem; color: var(--white)">
          Sale going on now!
        </h4>
      </BannerWrapper>
    </Link>
  )
}

export default Banner

const BannerWrapper = styled.div`
  background: var(--black);
  display: flex;
  justify-content: center;
  align-items: center;
`

import React from "react"
import styled from "styled-components"
import { sizes } from "../styles/breakpoints"

const Banner = () => {
  return (
    <BannerWrapper>
      <h4>Sale going on now!</h4>
    </BannerWrapper>
  )
}

export default Banner

const BannerWrapper = styled.div`
  background: var(--black);
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
`

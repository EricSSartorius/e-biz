import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

type Props = {
  message?: string
  link?: string
}

const Banner = ({
  message = "Take a look at our great products!",
  link = "/store",
}: Props) => {
  return (
    <Link to={link}>
      <BannerWrapper>
        <h6 css="margin: 0; padding: 10px; color: var(--white)">{message}</h6>
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
  height: 40px;
`

import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
import { Container } from "../styles/utils"
import { Link } from "gatsby"

const Hero = () => {
  return (
    <HeroWrapper>
      <div>
        <h1>Hero</h1>
        <p>Sale and product Info/image will go here to catch attention</p>
        <Button as={Link} to="/store">
          Shop
        </Button>
      </div>
    </HeroWrapper>
  )
}

export default Hero

const HeroWrapper = styled(Container)`
  width: 100%;
  background: var(--lightest-grey);
  display: flex;
  align-items: center;
  min-height: 500px;
`

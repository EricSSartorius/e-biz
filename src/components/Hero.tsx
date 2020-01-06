import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
import { Link } from "gatsby"

const Hero = () => {
  return (
    <HeroWrapper>
      <div>
        <div>HOME HERO</div>
        <p>Sale and product Info/image will go here to catch attention</p>
        <Button as={Link} to="/store">
          Store CTA
        </Button>
      </div>
    </HeroWrapper>
  )
}

export default Hero

const HeroWrapper = styled.div`
  width: 100%;
  text-align: center;
  background: var(--lightest-grey);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
`

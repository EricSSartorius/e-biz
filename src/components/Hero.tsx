import React from "react"
import { Button } from "./Button"
import { Link } from "gatsby"

const Hero = () => {
  return (
    <>
      <div>HOME HERO</div>
      <Button as={Link} to="/store">
        Store
      </Button>
    </>
  )
}

export default Hero
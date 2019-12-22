import React from "react"
import { Link } from "gatsby"
import Image from "../components/Image"
import SEO from "../components/Seo"
import Hero from "../components/Hero"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default IndexPage

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import GlobalStyle from "../styles/global"
import ShopifyProvider from "../context/ShopifyProvider"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import { sizes } from "../styles/breakpoints"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          facebook
          twitter
        }
      }
    }
  `)

  return (
    <>
      <ShopifyProvider>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Banner />
        <Main>{children}</Main>
        <Footer
          siteTitle={data.site.siteMetadata.title}
          facebook={data.site.siteMetadata.facebook}
          twitter={data.site.siteMetadata.twitter}
        />
      </ShopifyProvider>
    </>
  )
}

export default Layout

const Main = styled.main`
  max-width: ${sizes.xLarge / 18}em;
  margin: auto;
`

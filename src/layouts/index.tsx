import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GlobalStyle from "../styles/global"
import Header from "../components/Header"
import Footer from "../components/Footer"

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
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer
        siteTitle={data.site.siteMetadata.title}
        facebook={data.site.siteMetadata.facebook}
        twitter={data.site.siteMetadata.twitter}
      />
    </>
  )
}

export default Layout

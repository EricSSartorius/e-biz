import React, { useEffect, useState } from "react"
import Cookies from "js-cookie"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import GlobalStyle from "../styles/global"
import ShopifyProvider from "../context/ShopifyProvider"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import Cart from "../components/Cart"
import { sizes } from "../styles/breakpoints"

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [discountId, setDiscountId] = useState("")
  const isBannerShowing = false

  const checkForDiscount = () => {
    const dId =
      location && location.search && location.search.split("?discount=")[1]

    if (dId) {
      Cookies.set("discountId", dId, { expires: 3 })
      setDiscountId(dId)
    } else if (Cookies.get("discountId")) {
      setDiscountId(Cookies.get("discountId"))
    }
  }

  useEffect(() => {
    checkForDiscount()
  }, [])

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
      <ShopifyProvider>
        <Header siteTitle={data.site.siteMetadata.title} />
        {isBannerShowing && <Banner />}
        <Main>{children}</Main>
        <Footer
          siteTitle={data.site.siteMetadata.title}
          facebook={data.site.siteMetadata.facebook}
          twitter={data.site.siteMetadata.twitter}
        />
        <Cart discountId={discountId} />
      </ShopifyProvider>
    </>
  )
}

export default Layout

const Main = styled.main`
  max-width: ${sizes.xLarge / 18}em;
  margin: auto;
`

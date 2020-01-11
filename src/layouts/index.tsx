import React, { useEffect, useState } from "react"
// import addDays from 'date-fns/add_days';
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

const Layout = ({ children }) => {
  const [discountId, setDiscountId] = useState("")

  // const getGaCookie = () => {
  //   // Gets GA UTM Cookie
  //   if (
  //     location &&
  //     location.search &&
  //     location.search.includes('utm_source=')
  //   ) {
  //     const tomorrow = addDays(new Date(), 1).toGMTString();
  //     document.cookie = `gtmcook=${location.search};expires=${tomorrow};`;
  //   }
  // };

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
    // getGaCookie();
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
      <Cart discountId={discountId} />
    </ShopifyProvider>
  )
}

export default Layout

const Main = styled.main`
  max-width: ${sizes.xLarge / 18}em;
  margin: auto;
`

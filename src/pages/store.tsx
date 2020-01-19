import React from "react"
import SEO from "../components/Seo"
import ProductPreview from "../components/ProductPreview"
import { Grid } from "../styles/utils"
import { Container } from "../styles/utils"

const FAKE_PRODUCT = {
  title: "cool product",
  image: "",
  description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident`,
  variants: [
    {
      name: "variant 1",
      price: "29.99",
    },
  ],
  options: [
    {
      name: "color",
      values: ["red", "blue"],
    },
  ],
}
const FAKE_PRODUCTS = [FAKE_PRODUCT, FAKE_PRODUCT, FAKE_PRODUCT, FAKE_PRODUCT]

const StorePage = () => {
  return (
    <>
      <SEO title="Store" />
      <Container>
        <h1>Store Page</h1>
        <Grid cols={[1, 2, 3, 4]}>
          {FAKE_PRODUCTS.map(product => (
            <ProductPreview key={product.title} product={product} />
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default StorePage

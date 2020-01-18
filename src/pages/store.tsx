import React from "react"
import SEO from "../components/Seo"
import ProductPreview from "../components/ProductPreview"
import { Grid } from "../styles/utils"
import { Container } from "../styles/utils"

const FAKE_PRODUCT = {
  title: "cool product",
  image: "",
  description: "this is a product",
  variants: [
    {
      name: "variant 1",
      price: "29.99",
    },
  ],
  options: [
    {
      name: "option 1",
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
        <Grid cols={[1, 2, 4]}>
          {FAKE_PRODUCTS.map(product => (
            <ProductPreview key={product.title} product={product} />
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default StorePage

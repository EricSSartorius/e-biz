import React from "react"
import SEO from "../components/Seo"
import BuyButton from "../components/BuyButton"
import { Container, Grid } from "../styles/utils"

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
const ProductPage = () => (
  <>
    <SEO title="Product" />
    <Container>
      <Grid cols={[1, 2]}>
        <div>PRODUCT IMG HERE</div>
        <div css="justify-self: center">
          <h1>{FAKE_PRODUCT.title}</h1>
          <BuyButton
            isQuantityShowing
            isVariantsShowing
            product={FAKE_PRODUCT}
          />
        </div>
      </Grid>
    </Container>
    <Container>
      <p>{FAKE_PRODUCT.description}</p>
    </Container>
  </>
)

export default ProductPage

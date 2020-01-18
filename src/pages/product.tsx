import React from "react"
import SEO from "../components/Seo"
import BuyButton from "../components/BuyButton"
import { Container, Grid } from "../styles/utils"

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
const ProductPage = () => (
  <>
    <SEO title="Product" />
    <Container>
      <Grid cols={[1, 2]}>
        <div>PRODUCT IMG HERE</div>
        <div>
          <h1>{FAKE_PRODUCT.title}</h1>
          <BuyButton isQuantityShowing={true} product={FAKE_PRODUCT} />
        </div>
      </Grid>
    </Container>
    <Container>
      <p>{FAKE_PRODUCT.description}</p>
    </Container>
  </>
)

export default ProductPage

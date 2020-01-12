import React from "react"
import SEO from "../components/Seo"
import BuyButton from "../components/BuyButton"

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
    <h1>Product Page</h1>
    <h2>{FAKE_PRODUCT.title}</h2>
    <p>{FAKE_PRODUCT.description}</p>
    <BuyButton isQuantityShowing={true} product={FAKE_PRODUCT} />
  </>
)

export default ProductPage

import React from "react"
import SEO from "../components/Seo"

const product = {
  title: "cool product",
  image: "",
  description: "this is a product",
  price: "29.99",
}
const ProductPage = () => (
  <>
    <SEO title="Product" />
    <h1>Product Page</h1>
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    <p>{product.price}</p>
  </>
)

export default ProductPage

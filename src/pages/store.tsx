import React from "react"
import SEO from "../components/Seo"
import ProductPreview from "../components/ProductPreview"
import { Grid } from "../styles/utils"

const product = {
  title: "cool product",
  image: "",
  description: "this is a product",
  price: "29.99",
}
const products = [product, product, product, product]

const StorePage = () => (
  <>
    <SEO title="Store" />
    <h1>Store Page</h1>
    <Grid cols={[1, 2, 4]}>
      {products.map(product => (
        <ProductPreview key={product.title} product={product} />
      ))}
    </Grid>
  </>
)

export default StorePage

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import BuyButton from "./BuyButton"

type Option = {
  name: string
  values: string[]
}

type Variant = {
  name: string
  price: string
  sku: string
  shopifyId: string
}

type Product = {
  title: string
  image: string
  description: string
  options: Option[]
  variants: Variant[]
}

type Props = {
  product: Product
}
const ProductPreview = ({ product }: Props) => {
  return (
    <ProductPreviewWrapper>
      <Link to="/product">
        <div>PRODUCT IMAGE HERE</div>
        <h2 css="color: var(--primaryColor)">{product.title}</h2>
      </Link>
      <BuyButton product={product} />
    </ProductPreviewWrapper>
  )
}

export default ProductPreview

const ProductPreviewWrapper = styled.div`
  padding: 0 1.5rem 1.5rem;
  border: 1px solid var(--lineColor);
  border-radius: var(--cardRadius);
`

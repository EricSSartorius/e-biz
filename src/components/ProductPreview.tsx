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
  price: string
  options: Option[]
  variants: Variant[]
}

type Props = {
  product: Product
}
const ProductPreview = ({ product }: Props) => {
  return (
    <ProductPreviewWrapper>
      <h2>
        <Link to="/product">{product.title}</Link>
      </h2>
      <BuyButton isQuantityShowing={true} product={product} />
    </ProductPreviewWrapper>
  )
}

export default ProductPreview

const ProductPreviewWrapper = styled.div`
  padding: 0 1rem 1rem;
  border: 1px solid var(--lineColor);
  border-radius: var(--cardRadius);
`

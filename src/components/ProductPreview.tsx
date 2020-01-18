import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import BuyButton from "./BuyButton"
import { Container } from "../styles/utils"

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
      <Link to="/product">
        <h2>{product.title}</h2>
      </Link>
      <BuyButton isQuantityShowing={true} product={product} />
    </ProductPreviewWrapper>
  )
}

export default ProductPreview

const ProductPreviewWrapper = styled(Container)`
  border: 1px solid var(--lineColor);
  border-radius: var(--cardRadius);
`

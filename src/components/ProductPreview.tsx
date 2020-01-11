import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

type Product = {
  title: string
  image: string
  description: string
  price: string
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
      <p>{product.description}</p>
      <p>{product.price}</p>
    </ProductPreviewWrapper>
  )
}

export default ProductPreview

const ProductPreviewWrapper = styled.div``

import React, { useContext } from "react"
import styled from "styled-components"
// import Icon from "./Icon"
import ShopifyContext from "../context/ShopifyContext"

const IconWrapper = styled("div")`
  display: flex;
  &:hover {
    cursor: pointer;
  }
  margin-left: 1rem;
`

const IconTag = styled("div")`
  background: var(--blue);
  border: 2px solid var(--white);
  border-radius: 50%;
  color: var(--white);
  display: inline-block;
  height: 2.4rem;
  width: 2.4rem;
  text-align: center;
  vertical-align: middle;
  margin-left: -1.5rem;
  margin-top: -5px;

  span {
    font-size: 1.4rem;
  }
`

const CartIcon = () => {
  const { setIsCartOpen, cartQuantity } = useContext(ShopifyContext)
  return (
    <IconWrapper onClick={() => setIsCartOpen(true)}>
      <p>CART</p>
      {cartQuantity > 0 && (
        <IconTag>
          <span>{cartQuantity}</span>
        </IconTag>
      )}
    </IconWrapper>
  )
}

export default CartIcon
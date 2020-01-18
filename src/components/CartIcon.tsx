import React, { useContext } from "react"
import styled from "styled-components"
import ShopifyContext from "../context/ShopifyContext"
import Icon from "./Icon"

const IconTag = styled.span`
  background: var(--primaryColor);
  border-radius: 18px;
  color: var(--textColor);
  display: inline-block;
  height: 1.8rem;
  width: 1.8rem;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  position: absolute;
  right: -16px;
  top: -10px;
`

const CartIcon = () => {
  const { setIsCartOpen, cartQuantity } = useContext(ShopifyContext)
  return (
    <div css="margin-left: 2rem; display: flex; position: relative">
      <Icon
        name="cart"
        color="var(--white)"
        onClick={() => setIsCartOpen(true)}
      />
      {cartQuantity > 0 && <IconTag>{cartQuantity}</IconTag>}
    </div>
  )
}

export default CartIcon

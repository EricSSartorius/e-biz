import React, { useContext } from "react"
import styled from "styled-components"
// import Img from "gatsby-image"
import { Flex } from "../styles/utils"

import ShopifyContext from "../context/ShopifyContext"

const CartItem = styled("div")`
  background: var(--white);
  border-radius: 3px;
  padding: 1.5rem 1.5rem 0;
  margin-bottom: 20px;
  overflow: hidden;
  backface-visibility: visible;
  min-height: 65px;
  position: relative;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
`

const RemoveButton = styled("button")`
  position: absolute;
  padding: 0;
  right: 1.5rem;
  top: 1rem;
  border: 0;
  background: 0;
  font-size: 2rem;
  opacity: 0.5;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`

type LineItem = {
  id: string
  title: string
  quantity: number
  variant: {
    title: string
    price: number
    image: {
      src: string
    }
  }
}

type Props = {
  lineItem: LineItem
}

const LineItem = ({ lineItem }: Props) => {
  const {
    addVariantToCart,
    removeLineItemInCart,
    updateQuantityInCart,
  } = useContext(ShopifyContext)

  const price = `$${(lineItem.quantity * lineItem.variant.price).toFixed(2)}`

  return (
    <CartItem>
      <div>
        {lineItem.variant.image && (
          <img src={lineItem.variant.image.src} alt={`${lineItem.title}`} />
        )}
      </div>

      <div>
        <RemoveButton
          onClick={() => {
            removeLineItemInCart(lineItem)
          }}
        >
          ×
        </RemoveButton>
        )}
        <div>
          {lineItem.variant.title !== "Default Title" && (
            <p>{lineItem.variant.title}</p>
          )}
          <p>{lineItem.title}</p>
        </div>
        <Flex>
          <div>
            <button
              onClick={() =>
                updateQuantityInCart(lineItem.id, lineItem.quantity)
              }
            >
              -
            </button>
            )}
            <p>{lineItem.quantity}</p>
            <button
              onClick={() =>
                updateQuantityInCart(lineItem.id, lineItem.quantity, true)
              }
            >
              +
            </button>
          </div>

          <p>{price}</p>
        </Flex>
      </div>
    </CartItem>
  )
}

export default LineItem

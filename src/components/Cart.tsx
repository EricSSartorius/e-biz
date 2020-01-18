import React, { useContext, useRef } from "react"
import styled from "styled-components"
import { Button } from "./Button"
import { below } from "../styles/breakpoints"
import { Flex } from "../styles/utils"
import { Container } from "../styles/utils"
import useClickOutside from "../hooks/useClickOutside"

import LineItem from "./LineItem"
import ShopifyContext from "../context/ShopifyContext"

const CartWrapper = styled("div")`
  background: var(--black);
  color: var(--white);
  position: fixed;
  height: 100%;
  overflow-y: scroll;
  right: 0;
  top: 0;
  transform: ${({ isCartOpen }: { isCartOpen: boolean }) =>
    isCartOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.15s ease-in-out;
  width: 400px;
  z-index: 1000;
  ${below.xSmall`
    width: 100%;
  `};
`

type Props = {
  isTaxShowing?: boolean
  discountId?: string
}

const Cart = ({ isTaxShowing = false, discountId = "" }: Props) => {
  const { checkout, isCartOpen, setIsCartOpen } = useContext(ShopifyContext)
  const cartRef = useRef()
  useClickOutside(cartRef, () => setIsCartOpen(false))

  if (!checkout) return null

  const isCartEmpty = checkout.lineItems.length < 1

  // Gets Google Analytics linker param for cross-domain tracking
  const getLinkerParam = () => {
    // let linkerParam = '?';
    // if (window.ga) {
    //   window.ga(ga => {
    //     linkerParam += ga.get('linkerParam');
    //   });
    //   return linkerParam;
    // }
    return ""
  }

  const transformParams = (url: string) => {
    const idx = url.indexOf("?") + 1
    const preQuery = url.slice(0, idx)
    const postQuery = url.slice(idx)
    const replaced = postQuery.replace(/\?/g, "&")
    return preQuery + replaced
  }

  const openCheckout = async () => {
    const linkerParam = getLinkerParam()
    const discountVal = discountId ? `&discount=${discountId}` : ""

    try {
      window.location.href = transformParams(
        checkout.webUrl + linkerParam + discountVal
      )
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <CartWrapper ref={cartRef} isCartOpen={isCartOpen}>
      <Container data-testid="cart">
        <Flex>
          <h4 data-testid="cart-title">Your Cart</h4>
          <button onClick={() => setIsCartOpen(false)}>×</button>
        </Flex>
        <div>
          {isCartEmpty && <p data-testid="empty-cart">Your cart is empty.</p>}
          {checkout.lineItems.map(
            lineItem =>
              lineItem && <LineItem key={lineItem.id} lineItem={lineItem} />
          )}
        </div>

        {!isCartEmpty && (
          <footer>
            <div>
              <p>Subtotal</p>
              <p>${checkout.subtotalPrice}</p>
            </div>
            {isTaxShowing && (
              <div>
                <p>Taxes</p>
                <p>${checkout.totalTax}</p>
              </div>
            )}

            <Button data-testid="cart-checkout-button" onClick={openCheckout}>
              Checkout
            </Button>
            <p>
              <i>Shipping, taxes and discount codes are added at checkout.</i>
            </p>
          </footer>
        )}
      </Container>
    </CartWrapper>
  )
}

export default Cart

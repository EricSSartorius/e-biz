import React, { useState, useEffect } from "react"
import Client from "shopify-buy"
import Cookies from "js-cookie"

import ShopifyContext from "./ShopifyContext"

const client = Client.buildClient({
  domain: `${process.env.SHOP_NAME}.myshopify.com`,
  storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
})

const ShopifyProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [checkout, setCheckout] = useState({ lineItems: [] })
  const [loading, setLoading] = useState(false)

  const createCheckout = () => {
    setLoading(true)
    client.checkout
      .create()
      .then(result => {
        Cookies.set("cartId", result.id, { expires: 1 })
        setCheckout(result)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }

  const getCheckout = async () => {
    if (Cookies.get("cartId")) {
      try {
        const result = await client.checkout.fetch(Cookies.get("cartId"))
        // See if the checkout process has been completed
        if (!result.completedAt) setCheckout(result)
        // If checkout was complete then reset cart cookies and make new checkout
        Cookies.remove("cartId")
        Cookies.remove("discountId")
        return createCheckout()
      } catch (e) {
        console.log(e)
        return createCheckout()
      }
    }
    return createCheckout()
  }

  useEffect(() => {
    getCheckout()
  }, [])

  const addVariantToCart = (variantId, quantity) => {
    setLoading(true)
    if (!isCartOpen) {
      setIsCartOpen(true)
    }
    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }]
    client.checkout
      .addLineItems(checkout.id, lineItemsToAdd)
      .then(result => {
        setCheckout(result)
        setLoading(false)
      })
      .catch(e => {
        console.log(e)
        setLoading(false)
      })
  }

  const updateQuantityInCart = async (lineItemId, quantity, increment) => {
    setLoading(true)
    const checkoutId = checkout.id
    const updatedQuantity = increment ? quantity + 1 : quantity - 1

    const lineItemsToUpdate = [
      { id: lineItemId, quantity: parseInt(updatedQuantity, 10) },
    ]

    try {
      const result = await client.checkout.updateLineItems(
        checkoutId,
        lineItemsToUpdate
      )
      setCheckout(result)
      setLoading(false)
    } catch (e) {
      console.log(e)
      setLoading(false)
    }
  }

  const removeLineItemInCart = async lineItem => {
    setLoading(true)
    try {
      const result = await client.checkout.removeLineItems(checkout.id, [
        lineItem.id,
      ])
      setCheckout(result)
      setLoading(false)
    } catch (e) {
      console.log(e)
      setLoading(false)
    }
  }

  const cartQuantity = checkout.lineItems.length
    ? checkout.lineItems
        .map(item => item.quantity)
        .reduce((accumulator, quantity) => accumulator + quantity)
    : 0

  return (
    <ShopifyContext.Provider
      value={{
        client,
        cartQuantity,
        loading,
        addVariantToCart,
        setIsCartOpen,
        checkout,
        isCartOpen,
        updateQuantityInCart,
        removeLineItemInCart,
      }}
    >
      {children}
    </ShopifyContext.Provider>
  )
}

export default ShopifyProvider

import React, { useState, useEffect, useContext } from "react"

import { Button } from "./Button"
import ShopifyContext from "../context/ShopifyContext"
import VariantSelector from "./VariantSelector"

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
  isQuantityShowing?: boolean
  isVariantsShowing?: boolean
  product: Product
}

const BuyButton = ({
  isQuantityShowing = false,
  isVariantsShowing = false,
  product,
}: Props) => {
  const { client, addVariantToCart } = useContext(ShopifyContext)

  const [selectedOptions, setSelectedOptions] = useState({})
  const [selectedVariantQuantity, setSelectedVariantQuantity] = useState()
  const [selectedVariant, setSelectedVariant] = useState()

  useEffect(() => {
    const defaultOptionValues = {}

    product.options.forEach(selector => {
      defaultOptionValues[selector.name] = selector.values[0].value
    })

    setSelectedOptions(defaultOptionValues)
    product.options.forEach(selector => {
      setSelectedOptions({ [selector.name]: selector.values[0].value })
    })
  }, [])

  const handleOptionChange = event => {
    selectedOptions[event.target.name] = event.target.value

    const selectedVar = client.product.helpers.variantForOptions(
      product,
      selectedOptions
    )
    setSelectedVariant(selectedVar)
  }

  const variant = selectedVariant || product.variants[0]
  const variantQuantity = selectedVariantQuantity || 1

  return (
    <>
      <p>
        <meta itemProp="priceCurrency" content="USD" />${variant.price}
      </p>
      {/* <p>{variant.sku}</p> */}
      {isVariantsShowing &&
        product.options
          .filter(option => option.values.length > 1)
          .map(option => (
            <VariantSelector
              handleOptionChange={e => handleOptionChange(e)}
              key={option.name}
              option={option}
              value={selectedVariant}
            />
          ))}
      {isQuantityShowing && (
        <label htmlFor="quantity">
          <span>Quantity</span>
          <input
            min="1"
            name="quantity"
            type="number"
            defaultValue={variantQuantity}
            onChange={e => {
              setSelectedVariantQuantity(e.target.value)
            }}
          />
        </label>
      )}
      <Button
        onClick={() => addVariantToCart(variant.shopifyId, variantQuantity)}
      >
        Add to Cart
      </Button>
    </>
  )
}

export default BuyButton

import styled, { css } from "styled-components"
import { above } from "./breakpoints"
// Grids & Utilities
// 🔒 Not configurable
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ? When To Use
// Anytime you need 2 columns inside of a layout
// Cards, Images, nearly anything
// * scalign: any justify-content property value = 'space-between'
export const Flex = styled.div`
  display: flex;
  margin: 0 auto;
  > *:last-child {
    margin-left: 20px;
  }
  justify-content: ${({ scalign }: { scalign?: string }) =>
    scalign || "space-between"};
`

// ? When To Use
// Anytime you need a grid of anything.
// Cards, Images, nearly anything
// * cols: [1,2,3], 1
export const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  margin: 0 auto;
  ${({ cols = [] }) => {
    if (typeof cols === "object") {
      return cols.map((_, index: number) => {
        // This nifty map goes over each col and adds style to a breakpoint
        const key = Object.keys(above)[index]
        return above[key]`
         grid-template-columns: repeat(${cols[index]}, 1fr);
      `
      })
    }
    return css`
      grid-template-columns: repeat(${cols}, 1fr);
    `
  }}}
`

// ? When To Use
// Anytime you need the standard margin around something.
// A group of buttons, an image, anything
export const Items = styled.div`
  margin: var(--margins);
`

// ? When To Use
// Anytime you need the standard padding around something.
export const Container = styled.div`
  padding: 0 var(--padding) 4.5rem var(--padding);
`

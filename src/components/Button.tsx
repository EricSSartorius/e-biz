import styled, { css } from "styled-components"

/* Buttons */
// size - string - denotes the size of the button. small
const baseButton = css`
  display: inline-block;
  text-align: center;
  background: var(--blue-600);
  color: var(--white);
  font-weight: bold;
  border-radius: var(--buttonRadius);
  box-shadow: var(--elevation-1);
  font-size: var(--baseFontSize);
  font-family: var(--headingFont);
  padding: 1.2rem 2.5rem;
  transition: 0.3s ease all;
  &:hover {
    background: var(--blue-700);
    box-shadow: var(--elevation-2);
    transform: translate3d(0, -1px, 0);
  }
`

export const globalButton = css`
  button.btn {
    ${baseButton};
  }
`

export const Button = styled.button`
  ${baseButton};
  & + & {
    margin-left: 20px;
  }
  ${({ size }: { size?: string }) =>
    size === "small" &&
    css`
      font-size: var(--baseFontSize);
      padding: 6px 20px;
    `};
`

// Button used to skip to content
export const SkipLink = styled(Button)`
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  color: white;
  background: var(--red);
  &:active,
  &:focus,
  &:hover {
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    width: auto;
    height: auto;
    overflow: visible;
  }
`

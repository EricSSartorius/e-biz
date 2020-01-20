import React, { ReactNode } from "react"
import { useTransition, animated } from "react-spring"
import Portal from "./Portal"
import useScrollFreeze from "../hooks/useScrollFreeze"
import styled from "styled-components"
import { Card } from "../styles/utils"
import Icon from "./Icon"

interface ModalAnimationProps {
  isActive: boolean
  maxWidth?: string
  children: ReactNode
  closeAction?: () => void
}

const ModalAnimation = ({
  isActive,
  children,
  maxWidth = `530px`,
  closeAction,
}: ModalAnimationProps) => {
  const transitions = useTransition(isActive, null, {
    from: { opacity: 0, transform: "translate3d(0,-40px,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0px,0)" },
    leave: {
      opacity: 0,
      transform: "translate3d(0,-40px,0)",
    },
  })
  return (
    <Portal>
      {transitions.map(
        ({ item, key, props: animation }) =>
          item && (
            <Modal
              key={key}
              animation={animation}
              children={children}
              maxWidth={maxWidth}
              closeAction={closeAction}
              isActive={isActive}
            />
          )
      )}
    </Portal>
  )
}

interface ModalProps extends ModalAnimationProps {
  animation: any
}

const Modal = ({
  animation,
  isActive,
  children,
  maxWidth,
  closeAction,
}: ModalProps) => {
  useScrollFreeze()
  const { opacity } = animation
  const pointerEvents = isActive ? `all` : `none`
  return (
    <ModalOuterWrapper style={{ pointerEvents }}>
      <ModalWrapper>
        <Transport maxWidth={maxWidth} style={animation}>
          <Card
            style={{ pointerEvents }}
            css="display: flex; flex-direction: column"
          >
            {closeAction && (
              <button
                onClick={closeAction}
                style={{
                  position: "absolute",
                  right: "5px",
                  top: "8px",
                  pointerEvents: "all",
                  zIndex: "1",
                }}
              >
                <Icon name="close" />
              </button>
            )}
            {children}
          </Card>
        </Transport>
      </ModalWrapper>
      <Background
        as={animated.div}
        style={{ opacity }}
        onClick={closeAction || null}
      />
    </ModalOuterWrapper>
  )
}

const ModalOuterWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: var(--highestLevel);
`

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  overflow-y: scroll;
  padding: 10%;
  pointer-events: none;
  z-index: var(--highestLevel);
`

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  pointer-events: all;
  background: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  z-index: 11;
`

const Transport = styled(animated.div)`
  width: 100%;
  margin-top: auto;
  margin-bottom: auto;
  min-width: 320px;
  max-width: ${({ maxWidth }: { maxWidth: string }) => maxWidth};
`

export default ModalAnimation

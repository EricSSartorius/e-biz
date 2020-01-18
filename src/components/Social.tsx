import React from "react"
import styled from "styled-components"
import Icon from "./Icon"

type Props = {
  siteTitle: string
  facebook?: string
  twitter?: string
}

const Social = ({ siteTitle, facebook = "", twitter = "" }: Props) => {
  return (
    <SocialUl>
      {facebook && (
        <li>
          <a
            href={`https://www.facebook.com/${facebook}`}
            aria-label={`link to ${siteTitle} facebook account`}
          >
            <Icon name="facebook" color="var(--white)" />
          </a>
        </li>
      )}
      {twitter && (
        <li>
          <a
            href={`https://twitter.com/${twitter}`}
            aria-label={`link to ${siteTitle} twitter account`}
          >
            <Icon name="twitter" color="var(--white)" />
          </a>
        </li>
      )}
    </SocialUl>
  )
}

export default Social

const SocialUl = styled.ul`
  li {
    display: inline-block;
    margin: 10px;
  }
`

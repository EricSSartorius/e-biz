import React from "react"

type Props = {
  siteTitle: string
  facebook?: string
  twitter?: string
}

const Social = ({ siteTitle, facebook = "", twitter = "" }: Props) => {
  return (
    <ul>
      {facebook && (
        <li>
          <a
            href={`https://www.facebook.com/${facebook}`}
            aria-label={`link to ${siteTitle} facebook account`}
          >
            {/* <Icon name="facebook" /> */}
            FACBOOK
          </a>
        </li>
      )}
      {twitter && (
        <li>
          <a
            href={`https://twitter.com/${twitter}`}
            aria-label={`link to ${siteTitle} twitter account`}
          >
            {/* <Icon name="twitter" /> */}
            TWITTER
          </a>
        </li>
      )}
    </ul>
  )
}

export default Social

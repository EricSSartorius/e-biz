module.exports = {
  siteMetadata: {
    title: `2 Guys and a Comp`,
    description: `Buy things and be happy.`,
    facebook: "EpicGains",
    twitter: "The_Epic_Life",
    author: `@The_Epic_Life`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`raleway`, `source sans pro\:300,400,700`],
        display: "swap",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    // {
    //   resolve: `gatsby-source-shopify`,
    //   options: {
    //     shopName: process.env.SHOP_NAME,
    //     accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `2-guys`,
        short_name: `2guys`,
        start_url: `/`,
        background_color: `#f9aa33`,
        theme_color: `#f9aa33`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-offline`,
  ],
}

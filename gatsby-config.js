module.exports = {
  siteMetadata: {
    title: `E-Biz`,
    description: `Buy things and be happy.`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}

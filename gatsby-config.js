module.exports = {
  siteMetadata: {
    title: `Haw Jeh`,
    description: `This is Haw Jeh portfolio and blogging website`,
    author: `Haw Jeh`
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-personal-website-starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#442d7c`,
        theme_color: `#442d7c`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.jpg`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-tailwindcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/assets/styles/global.css`]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-213829061-1",
        head: true
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "G-90C7QNST93",
        defaultDataLayer: { platform: "gatsby" }
      },
    },
  ]
};

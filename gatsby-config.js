module.exports = {
  siteMetadata: {
    title: 'Liverpool Service Jam',
    description: 'A Jam is a high-energy event that brings diverse people together. They explore ways to change the world around them using design and a playful mindset.',
    twitter: 'https://twitter.com/lpoolservicejam',
    instagram: 'https://instagram.com/liverpoolservicejam/',
    medium: 'https://medium.com/liverpool-service-jam-2018',
    email: 'liverpoolservicejam@gmail.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    `gatsby-plugin-react-next`,
    `@jacobmischka/gatsby-plugin-react-svg`,
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `liverpool-service-jam-2018`,
      }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-W9JDD2C",
        includeInDevelopment: false,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/markdown`,
        name: 'markdown-pages',
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/components/SVG/JamLogo.svg",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    }
  ],
};

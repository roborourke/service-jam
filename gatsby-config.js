module.exports = {
  siteMetadata: {
    title: 'Liverpool Service Jam',
    description: '',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    `gatsby-plugin-react-next`,
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
    }
  ],
};

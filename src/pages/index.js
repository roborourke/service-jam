import React from 'react'
import styled from 'styled-components'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </div>
)

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            team {
              name
              bio
              job
            }
          }
          html
        }
      }
    }
    allMediumPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          virtuals {
            subtitle
            previewImage {
              imageId
            }
          }
          author {
            name
          }
        }
      }
    }
  }
`

export default IndexPage

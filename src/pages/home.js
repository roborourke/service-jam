import React from 'react'
import styled, { withComponent } from 'styled-components'
import { parse, H1, H2, H3, P, Container, ButtonLink } from '../components/Styled'

const Intro = Container.withComponent('section').extend`
  p {
    font-size: 130%;
    line-height: 1.623;
  }
`

const HomePage = ({ data }) => (
  <Intro align="center">
    <H1>{data.site.siteMetadata.title}</H1>
    <Container constrain="600px">
      {parse(data.intro.html)}
      <ButtonLink>Find out more</ButtonLink>
    </Container>
  </Intro>
)

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
        description
        twitter
        medium
        instagram
      }
    }
    intro: markdownRemark(id: { regex: "/intro/" }) {
      html
    }
    about: markdownRemark(id: { regex: "/about/" }) {
      frontmatter {
        title
      }
      html
    }
    team: markdownRemark(id: { regex: "/the-team/" }) {
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

export default HomePage

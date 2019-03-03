import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Container, H1, P } from '../components/Styled'

const NotFoundPage = ({ data }) => (
  <Layout data={data}>
    <Container scheme="green">
      <Container constrain="600px" pad>
        <H1>NOT FOUND</H1>
        <P>You just hit a route that doesn&#39;t exist... the sadness.</P>
      </Container>
    </Container>
  </Layout>
)

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
        description
        twitter
        instagram
        medium
      }
    }
  }
`

export default NotFoundPage

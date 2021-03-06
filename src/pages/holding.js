import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import { SmallMedium, SmallTwitter, SmallInstagram } from '../components/SVG'
import Loader from '../components/Loader'
import { H2, P, parse, Container } from '../components/Styled'


const SocialLinks = styled.ul`
  list-style: none;
  margin: 0 auto 20vh;
  padding: 0;
  display: block;
  text-align: center;
  li {
    display: inline-block;
    margin: 0 10px;
  }
`

const HoldingPage = ({ data }) => <Layout data={data}>
  <Container constrain="460px" align="center">
    <Loader key="loader" />
    <H2 key="soon" align="center" large margins={{top: '20px', bottom: '20px'}}>Coming soon...</H2>
    {parse(data.intro.html)}
    <P key="follow" align="center" margins={{top: '15vh', bottom: '5px'}}>Follow us</P>
    <SocialLinks key="social">
      <li>
        <a href={data.site.siteMetadata.medium}>
          <SmallMedium />
        </a>
      </li>
      <li>
        <a href={data.site.siteMetadata.twitter}>
          <SmallTwitter />
        </a>
      </li>
      <li>
        <a href={data.site.siteMetadata.instagram}>
          <SmallInstagram />
        </a>
      </li>
    </SocialLinks>
  </Container>
</Layout>

export const pageQuery = graphql`
  query HoldingQuery {
    site {
      siteMetadata {
        title
        description
        twitter
        instagram
        medium
      }
    }
    intro: markdownRemark(fileAbsolutePath: { regex: "/intro/" }) {
      html
    }
  }
`

export default HoldingPage

import React from 'react'
import styled from 'styled-components'
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

const IndexPage = ({ data }) => [
  <Loader key="loader" />,
  <H2 key="soon" align="center" large margins={{top: '20px', bottom: '10px'}}>Coming soon...</H2>,
  <Container constrain="460px" align="center">{parse(data.intro.html)}</Container>,
  <P key="follow" align="center" margins={{top: '20vh', bottom: '5px'}}>Follow us</P>,
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
]

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        twitter
        instagram
        medium
      }
    }
    intro: markdownRemark(id: { regex: "/intro/" }) {
      html
    }
  }
`

export default IndexPage

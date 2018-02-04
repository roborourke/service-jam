import React from 'react'
import styled from 'styled-components'
import { SmallMedium, SmallTwitter, SmallInstagram } from '../components/SVG'
import Loader from '../components/Loader'
import { H2, P } from '../components/Type'


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
  <H2 key="soon" align="center" large>Coming soon...</H2>,
  <P key="follow" align="center" margins={{top: '20vh', bottom: '5px'}}>FOLLOW US ON</P>,
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
      }
    }
  }
`

export default IndexPage
